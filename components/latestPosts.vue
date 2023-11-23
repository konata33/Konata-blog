<!-- <script setup>
const articles = await (await queryContent('/').find())
console.log(articles)
</script> -->

<template>
  <div py-5 text-4xl font-bold>
    Latest Posts
  </div>
  <ul space-y-3>
    <ContentList
      v-slot="{ list }"
      path="/"
      :query="{
        only: ['title', 'date', 'description', '_path'],
        limit: 5,
        sort: [{ date: -1 }],
      }"
    >
      <li
        v-for="article in list"
        :key="article._path"
      >
        <nuxt-link :to="`/post${article._path}`">
          <div flex cursor-pointer items-center justify-between hover:underline>
            <span>{{ article.title }}</span>
            <span>{{ new Date(article.date).toLocaleDateString() }}</span>
          </div>
        </nuxt-link>
      </li>
    </ContentList>
  </ul>
</template>
