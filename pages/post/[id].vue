<script>
export default {
  async asyncData({ $content, params }) {
    const path = params.path || '/'
    const article = await $content(path).fetch()

    return {
      article,
    }
  },
}
</script>

<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <nuxt-content :document="article" />
  </div>
</template>
