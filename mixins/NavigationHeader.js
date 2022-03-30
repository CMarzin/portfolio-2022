import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      menuState: 'ui/getMenuState'
    })
  },
  methods: {
    ...mapMutations({
      toggleMenuState: 'ui/toggle'
    }),
    toggleMenu() {
      if (this.menuState === 'closed') {
        this.toggleMenuState('open')
      } else {
        this.toggleMenuState('closed')
      }
    }
  }
}