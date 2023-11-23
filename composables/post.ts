export const usePostStore = defineStore('post', () => {
  const currentPosition = ref(0)
  const currentPath = ref('')

  function setPostion(position: number) {
    currentPosition.value = position
  }

  return {
    currentPosition,
    currentPath,
    setPostion,
  }
})
