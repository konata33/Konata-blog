<template>
  <NuxtLayout bg-gray-12>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: var(--un-preset-radix-gray12);
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
