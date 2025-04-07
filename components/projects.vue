<script setup>
const projects = useProjectsStore()

function getIconUrl(iconName) {
  return new URL(`../assets/icons/${iconName}.svg`, import.meta.url).href
}
</script>

<template>
  <div>
    <div py-5 text-4xl font-bold>
      Projects
    </div>
    <div flex flex-col flex-wrap>
      <div
        v-for="(item, index) in projects.list" :key="index" my-2 flex items-center space-x-3
        class="$ui-project-block"
      >
        <template v-if="item.icon.startsWith('i-') || item.icon.startsWith('vscode-icons')">
          <i :class="item.icon" ml-4 text-4xl />
        </template>
        <template v-else>
          <img :src="getIconUrl(item.icon)" ml-4 h-8 w-8>
        </template>
        <div my-5 flex flex-col>
          <div text-xl font-bold class="$ui-text">
            {{ item.title }}
          </div>
          <div text-2xs class="$ui-text-description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
