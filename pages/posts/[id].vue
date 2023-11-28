<script setup>
const route = useRoute()
</script>

<template>
  <article prose prose-lg flex font-sans first-letter:text-3xl>
    <ContentDoc :path="route.params.id" />
  </article>
</template>
