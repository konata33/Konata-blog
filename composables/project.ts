// @unocss-include

export const useProjectsStore = defineStore('projects', () => {
  const list = [
    {
      title: 'Kona-Motion',
      description: 'A Vue component library with unique personal style that provides a declarative way to create animations.',
      icon: 'i-vscode-icons-file-type-vue',
    },
    {
      title: 'Vue Macros',
      description: 'Explore and expand more macros and syntactic sugars to Vue.',
      icon: 'vue-macros',
    },
    {
      title: 'Vue DevTools',
      description: 'Vue.js browser developer tools extension.',
      icon: 'vue-devtools',
    },
  ]
  return {
    list,
  }
})
