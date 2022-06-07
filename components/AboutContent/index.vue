<template>
	<div class="about-content__container">

		<p class="about-content__subtitle">{{ $t('Hello I\'m') }}</p>

		<h1 class="about-content__title">Corentin Marzin</h1>

		<p class="about-content__subtitle">( {{ $t('But you can call me') }} <span class="about-content__subtitle--red">coco</span> )</p>

		<div class="about-content__description about-content__margin-top">
			<p class="about-content__text">Je suis un développeur Front-end, spécialisé dans les performances web avec une appétence pour les animations et l’expérience utilisateur.</p>
			<p class="about-content__text">Je suis diplômé de la promotion 2019 de l’école HETIC à Montreuil.</p>
			<p class="about-content__text">Je suis un grand passionné du web et de la technologie en général.</p>
			<p class="about-content__text">Grâce à mes études, mes stages et mon expérience professionnel. Je suis plus à même de comprendre les enjeux et problèmes de mes collègues afin de trouver les meilleurs solutions en un temps donnée.</p>
			<p class="about-content__text">Je suis à l’aise avec les fondamentaux du web tel que le HTML, CSS et le JS.</p>
			<p class="about-content__text">Listes des technologies que j’utilise ou que j’ai utilisé :</p>
			<ul class="about-content__description-technology-wrapper">
				<li class="about-content__description-technology">ES6, NUXT et VUEJS</li>
				<li class="about-content__description-technology">SASS et BEM</li>
				<li class="about-content__description-technology">Gulp, Webpack et Vite</li>
				<li class="about-content__description-technology">Lighthouse, Bundlephobia, WebPageTest</li>
				<li class="about-content__description-technology">Magento 2, Wordpress, PHP</li>
			</ul>
		</div>

		<h2 class="about-content__subtitle about-content__margin-top">{{ $t('Experience') }}</h2>

		<div class="about-content__experience-wrapper">
			<div v-for="(experience, index) in experiences" :key="`${experience.companyName}-${index}`" class="about-content__experience">
				<div class="about-content__experience-time"><time>{{ experience.startTime }}</time> - <time>{{ experience.endTime }}</time></div>
				<a :href="experience.companyWebsite" class="about-content__experience-company">{{ experience.companyName }}</a>
				<p :class="`about-content__experience-places about-content__experience-places--${experience.color}`">{{ experience.places }}</p>
				<p class="about-content__experience-desc">{{ experience.desc }}</p>
			</div>
		</div>

		<h2 class="about-content__subtitle about-content__margin-top">{{ $t('Hobbies') }}</h2>

		<p class="about-content__text about-content__margin-top">J’ai un blog ou je poste toutes ma veille digital :  <a href="https://cocoweb.fr/">https://cocoweb.fr/</a></p>
		<p class="about-content__text">Vous pouvez retrouver mon profil Github ici :  <a href="https://github.com/CMarzin">https://github.com/CMarzin</a></p>
		<p class="about-content__text">Vous pouvez retrouver toutes mes photos sur mon profil unsplash : <a href="https://unsplash.com/@marzin_corentin">https://unsplash.com/@marzin_corentin</a></p>
		<p class="about-content__text">Je suis un grand sportif, fan de VTT et de vélo en général. J’aime beaucoup le bricolage et la moto.</p>
		<p class="about-content__text">Si vous voulez plus d’informations ou juste pour me dire bonjour vous pouvez m’envoyer un email ici : <a href="mailto:corentinmarzin@free.fr">corentinmarzin@free.fr</a></p>
	</div>
</template>

<script>
	import { experiences } from './data'
	export default {
		data() {
			return {
				experiences
			}
		},
	}
</script>

<style src="./_style.scss" lang="scss" scoped></style>