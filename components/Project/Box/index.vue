<template>
  <div class="project-box__container">

    <page-dots v-if="!mediaSize('MobileLg')" />

    <h1 class="project-box__title">{{ projectData.title }}</h1>
    <h2 class="project-box__subtitle">{{ projectData.projectType }}</h2>

    <custom-link custom-class="project-box__project-button" :link="projectData.localUrl" />

    <p class="project-box__description">{{ projectData.shortDescription }}</p>

    <h2 class="project-box__subtitle project-box__subtitle-projects">{{ $t('OTHER PROJECTS') }}</h2>

    <project-selector />

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {

    props: {
      projectData: {
        type: Object,
        default: () => ({
          title: 'YSF',
          projectType: 'Agency website',
          date: '',
          externalUrl: 'https://ysf-preprod.herokuapp.com/',
          localUrl: '/ysf',
          background: 'ysf.png',
          shortDescription: 'Création d\'un site d\'agence web pour des copains de promotions.',
          stack: '',
        }),
      },
    },
    computed: {
      ...mapGetters({
        mediaSize: 'ui/getCurrentMediaSize'
      })
    },
  }
</script>

<style scoped src="./_style.scss" lang="scss"></style>