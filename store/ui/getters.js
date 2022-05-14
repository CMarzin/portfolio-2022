const getters = {
  getMenuState: (state) => state.menuState,
    /**
   *
   * @param {String} size = 'MobileLg | Tablet | Desktop | Wide'
   */
  getCurrentMediaSize: (state) => (size) => state[`is${size}`]
}
export default getters
