<script setup>
definePageMeta({
  layout: false,
})
const route = useRoute()
</script>

<template>
  <NavigationTabs />
  <article prose prose-lg color-slate-3 max-w-full flex items-center justify-center font-sans first-letter:text-3xl>
    <ContentDoc :path="route.params.id" />
  </article>
</template>
