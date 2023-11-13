<script setup lang="ts">
// const navIcons = [
//   { name: 'github', icon: 'i-mingcute-github-line', link: 'https://github.com/konata33' },
//   { name: 'x', icon:'https://x.com/__oQuery',link: 'https://twitter.com/Mrcat333' },
//   { name: 'bilibili', link: 'https://space.bilibili.com/1905698?spm_id_from=333.1007.0.0' },
//   { name: 'netEaseMusic', link: 'https://music.163.com/#/user/home?id=86691217' },
// ]
</script>

<template>
  <ul items-left mt-10 flex>
    <li>
      <div inline-block>
        <button aspect-square h-10 w-10 flex items-center justify-center rounded-full bg-blue-11 text-2xl text-white>
          <a center flex href="https://space.bilibili.com/1905698?spm_id_from=333.1007.0.0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              className="p-1 text-[#d6d9db]"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  fill="currentColor"
                  d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 1 1 1.415 1.414L16.414 6H18.5A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.414ZM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.355L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8ZM8 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm8 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z"
                />
              </g>
            </svg>
          </a>
        </button>
      </div>
    </li>
    <li ml-5>
      <div inline-block>
        <button center aspect-square h-10 w-10 flex items-center justify-center rounded-full bg-red-11 text-2xl text-white>
          <a center flex href="https://music.163.com/#/user/home?id=86691217">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.422 11.375c-.294 1.028.012 2.065.784 2.653c1.061.81 2.565.3 2.874-.995c.08-.337.103-.722.027-1.056c-.23-1.001-.521-1.988-.792-2.996c-1.33.154-2.543 1.172-2.893 2.394Zm5.548-.287c.273 1.012.285 2.017-.127 3c-1.128 2.69-4.722 3.14-6.573.826c-1.302-1.627-1.28-3.961.06-5.734c.78-1.032 1.804-1.707 3.048-2.054l.379-.104c-.084-.415-.188-.816-.243-1.224c-.176-1.317.512-2.503 1.744-3.04c1.226-.535 2.708-.216 3.53.76c.406.479.395 1.08-.025 1.464c-.412.377-.997.346-1.435-.09c-.247-.246-.51-.44-.877-.436c-.525.006-.987.418-.945.937c.037.468.172.93.3 1.386c.022.078.216.135.338.153c1.333.197 2.504.731 3.472 1.676c2.558 2.493 2.861 6.531.672 9.44c-1.529 2.032-3.61 3.169-6.127 3.409c-4.621.44-8.664-2.53-9.7-7.058C2.516 10.255 4.84 5.831 8.796 4.25c.586-.234 1.143-.031 1.371.498c.232.537-.019 1.086-.61 1.35c-2.368 1.06-3.817 2.855-4.215 5.423c-.533 3.434 1.656 6.777 5 7.722c2.723.769 5.658-.167 7.308-2.33c1.586-2.08 1.4-5.1-.427-6.874A3.978 3.978 0 0 0 15.4 9.026c.198.716.389 1.388.57 2.062Z"
              />
            </svg>
          </a>
        </button>
      </div>
    </li>
    <li ml-5>
      <div inline-block>
        <button aspect-square h-10 w-10 flex items-center justify-center rounded-full text-2xl text-white>
          <a center flex href="https://github.com/konata33">
            <i i-mingcute-github-line inline-block />
          </a>
        </button>
      </div>
    </li>
    <li ml-5>
      <div inline-block>
        <button aspect-square h-10 w-10 flex items-center justify-center rounded-full bg-gray-10 text-2xl text-white>
          <a center flex href="https://twitter.com/Mrcat333">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="p-1 text-[#d6d9db] "
              width="1em"
              height="1em"
            >
              <g>
                <path
                  d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0"
                  className="fill-current stroke-current"
                />
              </g>
            </svg>
          </a>
        </button>
      </div>
    </li>
  </ul>
</template>
