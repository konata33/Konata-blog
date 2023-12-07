<script setup>
const route = useRoute()
const article = await queryContent(route.params.id).findOne()
</script>

<template>
  <div h-auto w-full>
    <NavigationTabs />
    <div w-full flex flex-col items-center justify-center>
      <div
        w-full flex justify-center py-5 text-3xl font-bold font-sans
      >
        {{ article.title }}
      </div>
      <div>
        {{ article.date }}
      </div>
      <article class="$ui-text" prose-lg w-full items-center justify-center font-sans prose first-letter:text-3xl>
        <ContentDoc :path="route.params.id" />
      </article>
    </div>
  </div>
</template>
