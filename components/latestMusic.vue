<script setup lang="ts">
const musicList = [{
  title: 'luv u 2',
  author: 'Seto',
  cover: 'http://p1.music.126.net/Xy9QGtWiY3L6VqjFVz-4EA==/109951164572795568.jpg?param=130y130',
}, {
  title: 'U Forgot Our promise .',
  author: 'Seto / 發條',
  cover: 'http://p2.music.126.net/BAbVTOAhEy85UWgzIiRGLA==/109951165311883279.jpg?param=130y130',
}, {
  title: 'Things you will never know',
  author: 'Seto',
  cover: 'http://p2.music.126.net/POpj_NrGKUS_CBQ5TsiAmA==/109951168249702113.jpg?param=130y130',
}, {
  title: 'ヽ｀、｀ヽ｀ヽ',
  author: 'Yzz / Yzz Beats',
  cover: 'http://p1.music.126.net/m_PDuI_1y942-4iOsg4zDw==/109951164722712008.jpg?param=130y130',
}, {
  title: '虚无主义者＆日升日落的无尽循环',
  author: 'Sansssss',
  cover: 'http://p2.music.126.net/4lA8vUBE10WLVmGgy0LXkA==/109951168285834290.jpg?param=130y130',
}, {
  title: '爱在暴风雨里还没来得及消散',
  author: 'Sansssss',
  cover: 'http://p2.music.126.net/wFYty5AfR-6ORmqVbBJg9g==/109951168047946503.jpg?param=130y130',
}, {
  title: '我在迷离昏沉的夜里才能感觉到清醒',
  author: 'Sansssss',
  cover: 'http://p1.music.126.net/OLFgelt-ldcXYfLpBTDfrg==/109951168135687656.jpg?param=130y130',
}, {
  title: '我想带你去看海',
  author: 'Sansssss',
  cover: 'http://p1.music.126.net/HMNzH2G_mXWsRvhoLVZaJg==/109951168007894082.jpg?param=130y130',
}]
</script>

<template>
  <div>
    <div py-5 text-4xl font-bold>
      Latest Music
    </div>
    <div flex flex-row flex-wrap>
      <div v-for="(item, index) in musicList" :key="index" flex flex-col items-start px-4 pt-4>
        <!-- 图片 -->
        <AvatarRoot>
          <AvatarImage :src="item.cover" h-30 w-30 rounded-3 object-cover />
        </AvatarRoot>

        <!-- 音乐名称 -->
        <h2 max-w-30 truncate py-2 text-sm font-bold>
          {{ item.title }}
        </h2>
        <p max-w-30 truncate text-xs>
          {{ item.author }}
        </p>
      </div>
    </div>
  </div>
</template>
