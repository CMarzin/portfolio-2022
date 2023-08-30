<template>
  <div class="projects__container">
    <div class="projects__grid-part projects__grid-part-1 projects__grid-project-box">
      <project-slider v-if="mediaSize('MobileLg')"></project-slider>
      <project-box
        v-if="!mediaSize('MobileLg')"
        :project-data="currentProject"
        @updateCurrentProjectToRight="cycleArray('forward')"
        @updateCurrentProjectToLeft="cycleArray()" />
    </div>
    <div class="projects__grid-part projects__grid-part-2"></div>
    <div class="projects__grid-part projects__grid-part-3"></div>
    <div class="projects__grid-part projects__grid-part-4"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import projects from '~/static/data/projects'
  export default {
    name: 'IndexPage',
    provide () {
      const currentProject = {}

      Object.defineProperty(currentProject, 'projectNumber',{
        enumerable: true,
        get: () => this.currentProjectIndex,
      })

      return {
        currentProject,
      }
    },
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
    mounted () {
      document.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'ArrowRight':
            this.cycleArray('forward')
            break;
          case 'ArrowLeft':
            this.cycleArray()
            break;
        }
      });
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
        this.currentProjectIndex = index

        const root = document.documentElement;

        root.style.setProperty('--currentProjectColor', this.currentProject.color);
      }
    },
  }
</script>

<style scoped src="@/assets/styles/pages/_projects.scss" lang="scss"></style>
