<script setup>
const isDark = useDark()
</script>

<template>
  <div :class="isDark ? '$ui-dark-fg' : '$ui-fg'" sticky top-0 z-100 w-full flex>
    <div my-3 ml-3 max-w-15 w-10vw flex-1>
      <img src="@/assets/logo.png" alt="konata_logo" h-auto max-w-full rounded-full object-cover>
    </div>
    <div z-20 flex flex-1 items-center justify-end text-4>
      <NuxtLink to="/" px-5>
        Portfolio
      </NuxtLink>
      <NuxtLink to="/postlist" px-5>
        Posts
      </NuxtLink>
      <ClientOnly>
        <DarkToggle v-slot="{ toggle }" px-5>
          <i i-mingcute-sun-fill dark:i-mingcute-moon-line inline-block cursor-pointer text-3xl @click="toggle" />
        </DarkToggle>
      </ClientOnly>
    </div>
  </div>
</template>
