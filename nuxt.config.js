import colors from 'vuetify/es5/util/colors'
const webpack = require('webpack');

export default {
  generate: {
    fallback: true
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  mode:'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '',
    title: '無料動画素材 || moolike',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'moolikeは著作権フリーの動画素材サイトです。サプライズやyoutubeなど幅広い用途でご使用いただけます。' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src:'~/assets/app.scss',lang:'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/google-gtag',
  ],
  'google-gtag': {
    id: 'G-892LX3R4VJ',
    debug: true, // Enable to track in dev mode.
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
              primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins:[
      new webpack.ProvidePlugin({
        '_':'lodash'
      })
    ]
  },
    loading: '~/components/Loading.vue',
}
