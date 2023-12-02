<template>
  <div>
    <NuxtLink to="/postlist" cursor-pointer py-5 text-4xl font-bold>
      Latest Posts
    </NuxtLink>
    <ul py-5 space-y-3>
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
          <NuxtLink :to="`/posts${article._path}`">
            <div flex cursor-pointer items-center justify-between hover:underline>
              <span>{{ article.title }}</span>
              <span>{{ new Date(article.date).toLocaleDateString() }}</span>
            </div>
          </NuxtLink>
        </li>
      </ContentList>
    </ul>
  </div>
</template>
