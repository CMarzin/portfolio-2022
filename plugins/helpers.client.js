const helpers = {
  name: 'Helpers',
  isMobile: () => window.matchMedia('screen and (max-width: 320px)').matches,
  isMobileLg: () => window.matchMedia('screen and (max-width: 428px)').matches,
  isTablet: () => window.matchMedia('screen and (max-width: 720px)').matches,
  isDesktop: () => window.matchMedia('screen and (min-width: 980px)').matches,
  isWide: () => window.matchMedia('screen and (min-width: 1300px)').matches,
}

export default ({ app }, inject) => inject('helpers', helpers)
