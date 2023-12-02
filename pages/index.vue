<template>
  <div flex flex-row-reverse items-start justify-between py-5>
    <div>
      <img src="@/assets/logo.png" alt="konata_logo" h-38 w-40 rounded-full object-cover>
    </div>
    <div class="introduceFont" pt-5 text-3xl>
      <div>Hi,</div>
      <div>I'm Konata</div>
      <div>A Front-end developer</div>
      <div>I like to code in interesting projects</div>
    </div>
  </div>
  <NavigationIcons py-5 />
  <Projects py-5 />
  <LatestPosts py-5 />
</template>

<style>
.introduceFont{
  font-family: 'Kalam', sans-serif;
}
</style>
