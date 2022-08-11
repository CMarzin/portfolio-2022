<template>
  <div class="projects__container">
    <div class="projects__grid-part projects__grid-part-1 projects__grid-project-box">
      <project-slider v-if="mediaSize('MobileLg')"></project-slider>
      <button v-if="!mediaSize('MobileLg')" @click="cycleArray">Left project</button>
      <button v-if="!mediaSize('MobileLg')" @click="cycleArray('forward')">Right project</button>
      <project-box v-if="!mediaSize('MobileLg')" :project-data="currentProject" />
    </div>
    <div class="projects__grid-part projects__grid-part-2"></div>
    <div class="projects__grid-part projects__grid-part-3"></div>
    <div class="projects__grid-part projects__grid-part-4"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
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
    computed: {
      ...mapGetters({
        mediaSize: 'ui/getCurrentMediaSize'
      }),
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
