<template>
  <div class="project-box__container">

    <page-dots />

    <h1 class="project-box__title">Cher Ami</h1>
    <h2 class="project-box__subtitle">WEBSITE & FOLIO</h2>

    <custom-button custom-class="project-box__project-button" />

    <p class="project-box__description">During 3 months, I had my internship at Cher Ami in Lyon. My first project consisted of making some changes on several pages of their website (about/contact). During 3 months, I had my internship at Cher Ami in Lyon.</p>

    <h2 class="project-box__subtitle project-box__subtitle-projects">{{ $t('OTHER PROJECTS') }}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      projectData: {
        type: Object,
        default: () => {}
      },
    },
  }
</script>

<style scoped src="./_style.scss" lang="scss"></style>