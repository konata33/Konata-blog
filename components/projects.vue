<script setup>
const projects = useProjectsStore()
</script>

<template>
  <div>
    <div py-5 text-4xl font-bold>
      Projects
    </div>
    <div flex flex-col flex-wrap>
      <div v-for="(item, index) in projects.list" :key="index" my-2 flex items-center space-x-3 class="$ui-project-block">
        <i :class="item.icon" ml-4 text-3xl />
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
