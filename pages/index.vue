<template>
  <div flex flex-col justify-center>
    <div flex flex-row-reverse items-start justify-between py-5>
      <div max-w-40 w-15vw>
        <img src="@/assets/logo.png" alt="konata_logo" h-auto max-w-full rounded-full object-cover>
      </div>
      <div pt-5 text-3xl font-kalam>
        <div>Hi,</div>
        <div>I'm Konata</div>
        <div>A Front-end developer</div>
        <div>I like to code in interesting projects</div>
      </div>
    </div>
    <NavigationIcons py-5 />
    <Projects py-5 />
    <LatestPosts py-5 />
  </div>
</template>
