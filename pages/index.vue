<script setup lang="ts">
const musicCover = ref('http://p2.music.126.net/4lA8vUBE10WLVmGgy0LXkA==/109951168285834290.jpg?param=130y130')
const lofiCover = ref('https://i0.hdslb.com/bfs/archive/ece13a79b5151943a7a8a498267ec87c8dcf6251.jpg')
const bookCover = ref('https://cdn.weread.qq.com/weread/cover/96/cpPlatform_kmqPY1boCDVyMxq2AvPdCY/t6_cpPlatform_kmqPY1boCDVyMxq2AvPdCY.jpg')
</script>

<template>
  <div m-0 h-full flex flex-col-reverse md:m-10 md:m-b-0 md:flex-row>
    <div flex flex-col justify-center md:m-40 md:mr-0 md:mt-30 xs:ml-2 xs:mt-10 xs:text-center>
      <div font-size-10 font-mono md:font-size-20>
        Hi, I'm Konata
      </div>
      <div mt-5 font-size-5 font-mono md:font-size-10>
        A Front-end developer
      </div>
      <NavigationIcons />
    </div>
    <div mt-1 flex items-center justify-center xs:mt-10 md:flex-1>
      <img src="logo.png" alt="konata_logo" h-55 w-60 rounded-full object-cover>
    </div>
  </div>
  <div h-50vh flex font-mono md:m-45 md:m-r-65 md:m-t-0 md:flex-row sm:flex-col>
    <div relative flex-1 bg-opacity-50 bg-cover bg-no-repeat>
      <img :src="musicCover" absolute inset-0 h-full w-full object-cover opacity-50>
      <div relative inset-0 top-5 flex flex-col justify-center md:ml-5>
        <h1 text-2xl font-bold>
          Recently Played Music
        </h1>
        <div md:mt-5>
          <h2>虚无主义者＆日升日落的无尽循环</h2>
        </div>
        <div md:mt-5>
          <h2 text-lg font-semibold text-white>
            Author
          </h2>
          <h2>Sansssss</h2>
        </div>
        <div md:mt-5>
          <h2 text-lg font-semibold text-white>
            Album
          </h2>
          <h2>虚无主义还有她的月亮</h2>
        </div>
      </div>
    </div>

    <div relative ml-5 flex-1 bg-opacity-50 bg-cover bg-no-repeat>
      <img :src="lofiCover" absolute inset-0 h-full w-full object-cover opacity-50>
      <div relative inset-0 top-5 flex flex-col justify-center md:ml-5>
        <h1 text-2xl font-bold>
          Recently Read Articles
        </h1>
        <div md:mt-5>
          <h2>宇多田光</h2>
        </div>
        <div md:mt-5>
          <h2 text-lg font-semibold text-white>
            Author
          </h2>
          <h2>宇多田光</h2>
        </div>
      </div>
    </div>
    <div relative ml-5 flex-1 bg-opacity-50 bg-cover bg-no-repeat>
      <img :src="bookCover" absolute inset-0 h-full w-full object-cover opacity-50>
      <div relative inset-0 top-5 flex flex-col justify-center md:ml-5>
        <h1 text-2xl font-bold>
          Recently Read Books
        </h1>
        <div md:mt-5>
          <h2>Vue.js设计与实现</h2>
        </div>
        <div md:mt-5>
          <h2 text-lg font-semibold text-white>
            Author
          </h2>
          <h2>HcySunYang</h2>
        </div>
      </div>
    </div>
  </div>
</template>
