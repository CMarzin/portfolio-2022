<template>
  <ul class="project-selector__container" @mouseleave="setHoveredProject(projects[0])">
    <li v-for="({hovered, url, color, name, subtitle}, index) in projects" :key="subtitle + index">
      <a
        :href="url"
        :class="[
          'project-selector__link', hovered ? 'project-selector__link--selected' : '',
          `project-selector__color--${color}`
        ]"
        @mouseover="setHoveredProject(projects[index])">
          <p class="project-selector__name">{{ name }}</p>
          <p class="project-selector__subtitle">{{ subtitle }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        projects: [
          {
            name: 'Allegro musique',
            subtitle: 'Web performance',
            color: 'red',
            hovered: true,
            url: '/projects/allegro-musique',
          },
          {
            name: 'YSF',
            subtitle: 'Agency website',
            color: 'blue',
            hovered: false,
            url: '/projects/ysf',
          },
          {
            name: 'Orange',
            subtitle: 'E-commerce',
            color: 'yellow',
            hovered: false,
            url: '/projects/orange',
          },
          {
            name: 'Archives',
            subtitle: 'Autre',
            color: 'white-red',
            hovered: false,
            url: '/projects/archives',
          }
        ]
      }
    },
    methods: {
      setHoveredProject (hoveredProject) {
        this.projects = this.projects.map(project => {
          if (project.name === hoveredProject.name) {
            project.hovered = true
          } else {
            project.hovered = false
          }
          return project
        })
      }
    },
  }
</script>

<style scoped src="./_style.scss" lang="scss"></style>