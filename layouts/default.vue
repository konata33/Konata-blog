<script setup lang="ts">
// Supports weights 200-800
import '@fontsource-variable/newsreader'
</script>

<template>
  <body fg-base mx-auto max-w-3xl px-6 py-6>
    <slot />
  </body>
</template>

<style>
html {
  font-family: 'Newsreader Variable', sans-serif;
}
</style>
