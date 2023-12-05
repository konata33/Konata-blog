<script setup lang="ts">
const isDark = useDark()
</script>

<template>
  <NuxtLayout :class="{ dark: isDark }">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
