<script setup lang="ts">
// Supports weights 200-800
import '@fontsource-variable/newsreader'
import '@fontsource/kalam'
</script>

<template>
  <Suspense>
    <ClientOnly>
      <div fg-base mx-auto flex flex-col items-center justify-center px-6 py-6 font-newsreader>
        <slot />
      </div>
    </ClientOnly>
    <template #fallback>
      <div italic op50>
        <span animate-pulse>Loading...</span>
      </div>
    </template>
  </Suspense>
</template>

<style>
.dark {
  color-scheme: dark;
}
</style>
