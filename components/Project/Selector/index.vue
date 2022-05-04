<template>
  <ul class="project-selector__container" @mouseleave="setHoveredProject(projects[0])">
    <li v-for="(project, index) in projects" :key="project.subtitle + index">
      <a href="" :class="['project-selector__link', project.hovered ? 'project-selector__link--selected' : '', `project-selector__color--${project.color}`]" @mouseover="setHoveredProject(project)">
        <p class="project-selector__name">{{ project.name }}</p>
        <p class="project-selector__subtitle">{{ project.subtitle }}</p>
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
            hovered: true
          },
          {
            name: 'YSF',
            subtitle: 'Agency website',
            color: 'blue',
            hovered: false
          },
          {
            name: 'Orange',
            subtitle: 'E-commerce',
            color: 'yellow',
            hovered: false
          },
          {
            name: 'Archives',
            subtitle: 'Autre',
            color: 'white-red',
            hovered: false
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