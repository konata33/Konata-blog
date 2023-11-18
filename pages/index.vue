<script setup lang="ts">
const musicCover = ref('http://p1.music.126.net/GyR3p2a1EKPyTymEw9lR4Q==/109951167528528829.jpg?param=130y130')
const lofiCover = ref('https://i0.hdslb.com/bfs/archive/ece13a79b5151943a7a8a498267ec87c8dcf6251.jpg')
const bookCover = ref('https://upload.wikimedia.org/wikipedia/zh/9/96/Death_on_the_Nile_First_Edition_Cover_1937.jpg')
</script>

<template>
  <div m-0 h-full flex flex-col-reverse md:m-10 md:m-b-0 md:flex-row>
    <div xs:text-center xs:mt-10 xs:ml-2 flex flex-col justify-center md:m-40 md:mr-0>
      <div font-size-10 font-mono md:font-size-20>
        Hi, I'm Konata
      </div>
      <div mt-5 font-size-5 font-mono md:font-size-10>
        A Front-end developer
      </div>
      <NavigationIcons />
    </div>
    <div xs:mt-10 mt-1 flex items-center justify-center md:flex-1>
      <img src="logo.png" alt="konata_logo" h-55 w-60 rounded-full object-cover>
    </div>
  </div>
  <div h-50vh flex md:m-45 md:m-r-65 md:m-t-0 md:flex-row sm:flex-col>
    <div relative flex-1 bg-opacity-50 bg-cover bg-no-repeat>
      <img :src="musicCover" absolute inset-0 h-full w-full object-cover opacity-50>
      <div absolute inset-0 flex items-center justify-center>
        <h1 text-2xl font-bold>
          最近在听的音乐
        </h1>
      </div>
    </div>

    <div relative ml-5 flex-1 bg-opacity-50 bg-cover bg-no-repeat>
      <img :src="lofiCover" absolute inset-0 h-full w-full object-cover opacity-50>
      <div absolute inset-0 flex items-center justify-center>
        <h1 text-2xl font-bold>
          最近在听的Lofi
        </h1>
      </div>
    </div>
    <div relative ml-5 flex-1 bg-opacity-50 bg-cover bg-no-repeat>
      <img :src="bookCover" absolute inset-0 h-full w-full object-cover opacity-50>
      <div absolute inset-0 flex items-center justify-center>
        <h1 text-2xl font-bold>
          最近在看的书籍
        </h1>
      </div>
    </div>
  </div>
</template>
