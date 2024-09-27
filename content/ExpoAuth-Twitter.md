---
title: 在Expo中实现Twitter登录
author: Konata
date: 2024-9-27
description: 本文详细介绍如何在Expo应用中集成Twitter登录功能
---

最近在Expo的泥沼中反复折磨（哭  

记录一下有关在expo中Twitter的登录验证

[官方文档](https://docs.expo.dev/guides/authentication/#twitter)

## 准备工作

首先你需要在[Twitter Developer](https://developer.twitter.com/) 进行App注册以获取**clientId**信息 当你完成注册之后你应该会获得以下信息

![Twitter oauth2](https://cdn.jsdelivr.net/gh/Konata33/oss@master/uPic/image.png)

## 开始

笔者这里只做逻辑层的处理 不再返回携带Twitter图标的**Button**

```typescript
// twitterAuth.ts

import { useEffect, useState, useCallback } from "react";
import { useAuthRequest } from "expo-auth-session";
import { TWITTER_AUTH_ENDPOINTS, TWITTER_CONFIG } from "@/constants/Auth";
import { userStore } from "@/store/userStore";
// 封装了ahooks中的useRequest Hook，用法与其中无异
import { useTwitterAuthCallback } from "@/api";
// 封装了适用于各平台的提示框
import { showToast } from "@/utils/useToast";
import { useRouter } from "expo-router";

export function useTwitterAuth() {
  const [authResult, setAuthResult] = useState<{
    success: boolean;
    code?: string;
    error?: string;
  } | null>(null);

  const { setUser } = userStore();
  const [codeVerifier, setCodeVerifier] = useState<string | null>(null);
  const { runAsync: twitterAuthCallback, loading } = useTwitterAuthCallback();
  const useroute = useRouter();

  // 首先你需要定义TwitterAuth的配置请求参数
  const [request, response, promptAsync] = useAuthRequest(
    {
      // 在平台注册获取的clientId
      clientId: TWITTER_CONFIG.clientId,
      // 在平台进行配置的成功回调
      redirectUri: TWITTER_CONFIG.redirectUri,
      usePKCE: true,
      scopes: ["tweet.read", "users.read"],
    },
    //  const TWITTER_AUTH_ENDPOINTS = {
    //    authorizationEndpoint: "https://twitter.com/i/oauth2/authorize",
    //    tokenEndpoint: "https://twitter.com/i/oauth2/token",
    //    revocationEndpoint: "https://twitter.com/i/oauth2/revoke",
    //  };
    TWITTER_AUTH_ENDPOINTS,
  );

  useEffect(() => {
    if (request?.codeVerifier) {
      setCodeVerifier(request.codeVerifier);
    }
  }, [request]);

  const handleAuthCode = useCallback(
    async (code: string, state: string, codeVerifier: string) => {
      try {
        // 成功登录拿回Token码 由后端服务进行解码处理获得用户信息
        const result = await twitterAuthCallback({ code, state, codeVerifier });
        if (result.error) {
          throw new Error(result.error);
        }
        if (result.username) {
          setUser(result);
          setAuthResult({ success: true });
          useroute.back();
        } else {
          throw new Error("Failed to retrieve user information");
        }
      } catch (error) {
        console.error("Error handling Twitter auth callback:", error);
        setAuthResult({
          success: false,
          error:
            error instanceof Error ? error.message : "Twitter login failed",
        });
        showToast("Twitter login failed, please try again");
      }
    },
    [twitterAuthCallback, setUser],
  );

  // 函数逻辑处理的方式
  const login = useCallback(async () => {
    if (!request) {
      throw new Error("Twitter auth request could not be created");
    }
    try {
      const result = await promptAsync();
      if (
        result.type === "success" &&
        result.params.code &&
        result.params.state
      ) {
        await handleAuthCode(
          result.params.code,
          result.params.state,
          codeVerifier!,
        );
      } else {
        setAuthResult({
          success: false,
          error: "Authentication failed or cancelled",
        });
      }
    } catch (error) {
      setAuthResult({ success: false, error: "Error starting auth process" });
    }
  }, [request, promptAsync, handleAuthCode, codeVerifier]);

  return { login, authResult, loading };
}

```

组件封装之后即可像如下轻松使用

```TSX
...
import { useTwitterAuth } from "./twitterAuth";

export default function LoginScreen() {
  ...
  const { login: TwitterLogin } = useTwitterAuth();

  return (
    ...
    <TouchableOpacity onPress={TwitterLogin}>
      <Ionicons name="logo-twitter" size={30} color="white" />
    </TouchableOpacity>
  )
}
```

## Tips

如果你不知道如何配置redirectUrl的话，参考以下截图
![twitterConfig](https://cdn.jsdelivr.net/gh/Konata33/oss@master/uPic/twitterConfig.png)

向下滑动会看到**App info**设置 在这里进行配置即可
![twitterUrlConfig](https://cdn.jsdelivr.net/gh/Konata33/oss@master/uPic/twitterUrlConfig.png)
