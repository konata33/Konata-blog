<script setup>
const route = useRoute()
</script>

<template>
  <div h-auto w-full>
    <NavigationTabs />
    <div w-full flex flex-col items-center justify-center>
      <div font-sans>
        标题我的字呢？？？
      </div>
      <article prose-lg w-full flex items-center justify-center font-sans color-slate-3 prose first-letter:text-3xl>
        <ContentDoc :path="route.params.id" />
      </article>
    </div>
  </div>
</template>
