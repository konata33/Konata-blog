<template>
  <NavigationTabs />
  <div flex flex-col items-center justify-center>
    <div py-10 font-size-17 font-bold font-kalam>
      Notes
    </div>
    <ul color-slate-3 md:w-40vw space-y-3>
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
              <div class="$ui-text" mb-5 flex items-center justify-between hover:underline>
                <span text-truncate font-bold>{{ article.title }}</span>
                <span>{{ article.date }}</span>
              </div>
              <div max-w-65vw text-sm class="$ui-text-description">
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
