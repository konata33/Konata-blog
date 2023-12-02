<script setup>
const route = useRoute()
</script>

<template>
  <div h-auto w-full>
    <NavigationTabs />
    <article prose-lg max-w-full flex items-center justify-center font-sans color-slate-3 prose first-letter:text-3xl>
      <ContentDoc :path="route.params.id" />
    </article>
  </div>
</template>
