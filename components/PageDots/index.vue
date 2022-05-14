<template>
  <ul class="project-dots">
    <li
      v-for="(dot, index) in pagination"
      :key="index"
      :class="['project-dot__container', dot.selected ? 'project-dot__container--selected' : '']">
      <span v-if="dot.selected" class="project-dot__number">0{{ index + 1 }}</span>
      <span v-if="dot.selected" class="project-dot--selected"></span>
      <span v-if="!dot.selected" class="project-dot"></span>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        pagination: [
          {
            name: '',
            selected: true
          },
          {
            name: '',
            selected: false
          },
          {
            name: '',
            selected: false
          },
          {
            name: '',
            selected: false
          }
        ],
        lastPosition: null,
        animationframeDots: null
      }
    },
    computed: {
      currentDot () {
        return 0
      }
    },
  }
</script>

<style scoped src="./_style.scss" lang="scss"></style>