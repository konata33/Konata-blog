<template>
  <NavigationTabs />
  <div flex flex-col items-center justify-center>
    <div py-10 font-size-17 font-bold font-kalam>
      Notes
    </div>
    <ul class="w-50vw color-slate-3 space-y-3">
      <ContentList
        path="/"
        :query="{
          only: ['title', 'date', 'description', '_path'],
          sort: [{ date: -1 }],
        }"
      >
        <template #default="{ list }">
          <li
            v-for="article in list"
            :key="article._path"

            cursor-pointer py-5
          >
            <NuxtLink :to="`/posts${article._path}`">
              <div class="flex items-center justify-between $ui-text hover:underline">
                <span mb-5 text-3xl font-bold>{{ article.title }}</span>
                <span>{{ new Date(article.date).toLocaleDateString() }}</span>
              </div>
              <div text-sm class="$ui-text">
                {{ article.description }}
              </div>
            </NuxtLink>
          </li>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </ul>
  </div>
</template>
