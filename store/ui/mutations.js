const mutations = {
  toggle(state, menuState) {
    state.menuState = menuState
  },
  /**
   *
   * @param {Object} state
   * @param {Object} {media: 'MobileLg | Tablet | Desktop | Wide', value: true | false}
   */
  setCurrentMediaSize (state, {media, value}) {
    state[`is${media}`] = value
  }
}

export default mutations
