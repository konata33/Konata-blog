<script>
definePageMeta({
  layout: false,
})
</script>

<template>
  <div sticky top-0 z-100 w-full flex>
    <div m-5 flex-1>
      <img src="@/assets/logo.png" alt="konata_logo" h-13 w-14 rounded-full object-cover>
    </div>
    <div m-5 flex flex-1 items-center justify-end>
      <NuxtLink to="/" px-5>
        Portfolio
      </NuxtLink>
      <NuxtLink to="/postlist" px-5>
        Posts
      </NuxtLink>
    </div>
  </div>
</template>
