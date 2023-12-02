// @unocss-include

export const useProjectsStore = defineStore('projects', () => {
  const list = [
    {
      title: 'Unplugin-Console',
      description: ' Use ast-kit to automatically erase browser console print information.',
      icon: 'i-vscode-icons-file-type-vite',
    },
    {
      title: 'Unplugin-dynamic-Import',
      description: ' Using Vite for dynamic SVG conversion.',
      icon: 'i-vscode-icons-file-type-vite',
    },
  ]
  return {
    list,
  }
})
