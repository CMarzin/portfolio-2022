<template>
	<div class="about-content__container">

		<p class="about-content__subtitle">{{ $t('Hello I\'m') }}</p>

		<h1 class="about-content__title">Corentin Marzin</h1>

		<p class="about-content__subtitle">( {{ $t('But you can call me') }} <span class="about-content__subtitle--red">coco</span> )</p>

		<div class="about-content__description about-content__margin-top">
			<p class="about-content__text">{{ $t('I am a French Front-end Developer 🇫🇷, specialized in web performance with some skills for the animation and UX.') }}</p>
			<p class="about-content__text about-content__margin-top">{{ $t('I am a 2019 graduate of the HETIC school in Montreuil.')}}</p>

			<p class="about-content__text about-content__margin-top">{{ $t('Technologies I use daily or used to') }}</p>
			<ul
				v-for="(technology, index) in technologiesUsed"
				:key="`${technology}-${index}`"
				class="about-content__description-technology-wrapper">
					<li class="about-content__description-technology">{{ technology }}</li>
			</ul>
		</div>

		<h2 class="about-content__subtitle about-content__margin-top">{{ $t('Experiences') }}</h2>

		<div class="about-content__experience-wrapper">
			<div v-for="(experience, index) in experiences" :key="`${experience.companyName}-${index}`" class="about-content__experience">
				<div class="about-content__experience-time"><time>{{ $t(experience.startTime) }}</time> - <time>{{ $t(experience.endTime) }}</time></div>
				<a :href="experience.companyWebsite" class="about-content__experience-company">{{ experience.companyName }}</a>
				<p :class="`about-content__experience-places about-content__experience-places--${experience.color}`">{{ experience.places }}</p>
				<p class="about-content__experience-desc">{{ $t(experience.desc) }}</p>
			</div>
		</div>

		<h2 class="about-content__subtitle about-content__margin-top">{{ $t('Hobbies') }}</h2>

		<p class="about-content__text about-content__margin-top">{{ $t('I got a blog where I put all stuff related to Front-end development :')}} <a href="https://cocoweb.fr/">https://cocoweb.fr/</a></p>
		<p class="about-content__text about-content__margin-top">{{ $t('You can find my Github here :')}} <a href="https://github.com/CMarzin">https://github.com/CMarzin</a></p>
		<p class="about-content__text about-content__margin-top">{{ $t('You can find all my photographyon my unsplash profile :')}} <a href="https://unsplash.com/@marzin_corentin">https://unsplash.com/@marzin_corentin</a></p>
		<p class="about-content__text about-content__margin-top">{{ $t('I really love sport, big fan of mountain bike and biking in general. I also love DIY and riding motorcycle.')}}</p>
		<p class="about-content__text about-content__margin-top">{{ $t('If you want more information or just to say hello you can send me an email here :') }} <a href="mailto:corentinmarzin@free.fr">corentinmarzin@free.fr</a></p>
	</div>
</template>

<script>
	import { experiences, technologiesUsed } from '~/static/data/index'
	export default {
		name: 'AboutContent',
		data() {
			return {
				experiences,
				technologiesUsed
			}
		},
	}
</script>

<style src="./_style.scss" lang="scss" scoped></style>