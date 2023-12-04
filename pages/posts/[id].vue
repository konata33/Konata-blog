<script setup>
const route = useRoute()
const article = await queryContent(route.params.id).findOne()
</script>

<template>
  <div h-auto w-full>
    <NavigationTabs />
    <div w-full flex flex-col items-center justify-center>
      <div
        w-full flex justify-center py-5 text-6xl font-bold font-sans
      >
        {{ article.title }}
      </div>
      <div>
        {{ article.date }}
      </div>
      <article prose-lg w-full flex items-center justify-center font-sans color-slate-3 prose first-letter:text-3xl>
        <ContentDoc :path="route.params.id" />
      </article>
    </div>
  </div>
</template>
