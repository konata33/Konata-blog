<script setup lang="ts">
// Supports weights 200-800
import '@fontsource-variable/newsreader'
import '@fontsource/kalam'
</script>

<template>
  <div fg-base font-newsreader mx-auto flex flex-col items-center justify-center px-6 py-6>
    <slot />
  </div>
</template>

<style>
.dark {
  color-scheme: dark;
}
</style>
