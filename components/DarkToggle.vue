<script setup lang="ts">
const props = withDefaults(defineProps<{
  isDark?: boolean
  animation?: boolean
  animationDuration?: number
}>(), {
  isDark: false,
  animation: true,
  animationDuration: 500,
})

const isDarkModel = useVModel(props, 'isDark')

const mode = useColorMode({
  initialValue: isDarkModel.value ? 'dark' : 'light',
  onChanged: (value) => {
    isDarkModel.value = value === 'dark'
  },
})

const isDark = computed({
  get: () => mode.value === 'dark',
  set: v => mode.value = v ? 'dark' : 'light',
})

function toggle(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    useToggle(useDark())
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value
          ? [...clipPath].reverse()
          : clipPath,
      },
      {
        duration: props.animationDuration,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
const context = {
  mode,
  isDark,
  toggle,
}
</script>

<template>
  <span class="$ui-dark-toggle-vtr">
    <slot v-bind="context" />
  </span>
</template>
