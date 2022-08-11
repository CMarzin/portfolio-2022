import { mapMutations, mapGetters } from 'vuex'
import navigationItems from '~/static/data/navigationItems'
export default {
	data() {
		return {
			isMobileLg: true,
			isTablet: false,
			isDesktop: false,
			navigationItems
		}
	},
	computed: {
		bgImg () {
			return require('@/assets/images/image-bg.jpg')
		},
		...mapGetters({
      menuState: 'ui/getMenuState'
    })
	},
	mounted () {
		this.setSize()

		this.$nextTick(() => {
			this.onResize()
		})

		window.addEventListener('resize', this.onResize)
	},
	methods: {
		...mapMutations({
			setCurrentMediaSize: 'ui/setCurrentMediaSize'
		}),
		setSize () {
			const mediaList = ['MobileLg', 'Desktop', 'Tablet']
			this.isMobileLg = this.$helpers.isMobileLg()
			this.isDesktop = this.$helpers.isDesktop()
			this.isTablet = this.$helpers.isTablet()

			for (let index = 0; index < mediaList.length; index++) {
				const media = mediaList[index];
				this.setCurrentMediaSize({media, value: this[`is${media}`]})
			}
			console.log('mediaSize isMobileLg', this.isMobileLg)
			console.log('mediaSize isDesktop', this.isDesktop)
			console.log('mediaSize isTablet', this.isTablet)
		},
		onResize() {
			this.setSize()
		}
	}
}