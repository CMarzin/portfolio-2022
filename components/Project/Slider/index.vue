<template>
	<section class="splide" aria-label="Splide Basic HTML Example">
		<div class="splide__track">
			<ul class="splide__list">
				<li v-for="(project, index) in projects" :key="`${index}-asdasdas`" :class="`splide__slide u-bg-${project.color}`">
					<project-box :project-data="project" />
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	import Splide from '@splidejs/splide'
	import projects from '~/static/data/projects'
	import '@splidejs/splide/dist/css/splide.min.css'
	export default {
		data() {
			return {
				projects
			}
		},
		mounted () {
			new Splide( '.splide', {
				  type: 'loop',
					padding: '1rem',
					arrows: false
			}).mount()
		},
	}
</script>

<style scoped src="./_style.scss" lang="scss"></style>
