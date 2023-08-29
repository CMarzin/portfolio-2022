<template>
  <ul class="project-dots">
    <span @click="$emit('updateCurrentProjecToleft')"><svg-arrow-long-left  /></span>
    <span class="project-dot__number">0{{ currentProjectNumber + 1 }}</span>
    <span @click="test"><svg-arrow-long-right  /></span>
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
    methods: {
      test () {
        this.$emit('updateCurrentProjecToleft')
      }
    }
  }
</script>

<style scoped src="./_style.scss" lang="scss"></style>