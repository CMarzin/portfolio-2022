<template>
  <div class="project-box__container">

    <page-dots
      v-if="!mediaSize('MobileLg')"
      @updateCurrentProjecToLeft="$emit('updateCurrentProjectToLeft')"
      @updateCurrentProjecToRight="$emit('updateCurrentProjectToRight')" />

    <h1 class="project-box__title">{{ projectData.title }}</h1>
    <h2 class="project-box__subtitle">{{ projectData.projectType }}</h2>

    <custom-link custom-class="project-box__project-button" :link="projectData.localUrl" />

    <div class="project-box__description" v-html="projectData.shortDescription"></div>

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