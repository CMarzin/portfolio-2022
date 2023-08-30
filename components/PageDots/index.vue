<template>
  <ul class="project-dots">
    <span class="project-dot" @click="$emit('updateCurrentProjecToLeft')">
      <svg-arrow-long-left />
    </span>
    <span class="project-dot__number">0{{ currentProjectNumber + 1 }}</span>
    <span class="project-dot" @click="$emit('updateCurrentProjecToRight')">
      <svg-arrow-long-right />
    </span>
  </ul>
</template>

<script>
  export default {
    inject: ['currentProject'],
    computed: {
      currentProjectNumber () {
        return this.currentProject.projectNumber
      },
    },
  }
</script>

<style scoped src="./_style.scss" lang="scss"></style>