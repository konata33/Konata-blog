<script>
definePageMeta({
  layout: false,
})
</script>

<template>
  <div top-0 z-100 w-full flex border-b-1 b-white>
    <nav class="bg-blue-500 p-4 text-white">
      <ul class="flex justify-between">
        <li>
          <NuxtLink class="hover:text-gray-300" to="/">
            主页
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:text-gray-300">
            关于
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>

  <div flex flex-col items-center justify-center>
    <div font-kalam py-10 font-size-17 font-bold>
      Notes
    </div>
    <ul class="w-50vw space-y-3">
      <ContentList
        v-slot="{ list }"
        path="/"
        :query="{
          only: ['title', 'date', 'description', '_path'],
          sort: [{ date: -1 }],
        }"
      >
        <li
          v-for="article in list"
          :key="article._path"

          cursor-pointer py-5
        >
          <NuxtLink :to="`/posts${article._path}`">
            <div class="flex items-center justify-between hover:underline">
              <span mb-5 text-3xl font-bold>{{ article.title }}</span>
              <!-- <span>{{ new Date(article.date).toLocaleDateString() }}</span> -->
            </div>
            <div text-sm>
              {{ article.description }}
            </div>
          </NuxtLink>
        </li>
      </ContentList>
    </ul>
  </div>
</template>
