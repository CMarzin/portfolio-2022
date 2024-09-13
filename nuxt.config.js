export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    middleware: 'beforeRouteLeave'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Corentin Marzin',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://plausible.io/js/script.outbound-links.tagged-events.pageview-props.js',
        'data-domain': 'corentinmarzin.fr'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/helpers.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/assets/styles/helpers/_index.scss',
      ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n'],

  i18n: {
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'fr',
    parsePages: false,
    strategy: 'prefix_and_default',
    detectBrowserLanguage: false,
    pages: {
      project: {
        en: '/project',
        fr: '/projets',
      }
    },
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        en: require('./lang/en-US.js'), // Replace with your English locale messages
        fr: require('./lang/fr-FR.js') // Replace with your French locale messages
      }
    },
    locales: [
      {
        code: 'en',
        file: 'en-US.js'
      },
      {
        code: 'fr',
        file: 'fr-FR.js'
      }
    ],

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
