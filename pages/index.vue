<template>
  <div class="projects__container">
    <div class="projects__grid-part projects__grid-part-1 projects__grid-project-box">
      <button @click="cycleArray">Left project</button>
      <button @click="cycleArray('forward')">Right project</button>
      <project-box :project-data="currentProject" />
    </div>
    <div class="projects__grid-part projects__grid-part-2"></div>
    <div class="projects__grid-part projects__grid-part-3"></div>
    <div class="projects__grid-part projects__grid-part-4"></div>
  </div>
</template>

<script>
  import projects from '~/static/data/projects'
  export default {
    name: 'IndexPage',
    data() {
      return {
        projectDataBox: projects,
        currentProjectIndex: 0,
        currentProject: projects[0]
      }
    },
    methods: {
      cycleArray(direction) {
        if (direction === 'forward') {
          this.currentProjectIndex++
        } else {
          this.currentProjectIndex--
        }
        const index = this.currentProjectIndex % this.projectDataBox.length
        this.currentProject = this.projectDataBox[index]
      }
    },
  }
</script>

<style scoped src="@/assets/styles/pages/_projects.scss" lang="scss"></style>
