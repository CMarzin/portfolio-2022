const helpers = {
  name: 'Helpers',
  isMobile: () => window.matchMedia('screen and (max-width: 320px)').matches,
  isTablet: () => window.matchMedia('screen and (max-width: 720px)').matches,
  isDesktop: () => window.matchMedia('screen and (max-width: 980px)').matches,
}

export default ({ app }, inject) => inject('helpers', helpers)
