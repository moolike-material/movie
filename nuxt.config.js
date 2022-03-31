import colors from 'vuetify/es5/util/colors'
const webpack = require('webpack');

export default {
  generate: {
    fallback: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '',
    title: 'moolike | シンプルで使いやすい無料動画素材サイト',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'moolikeはシンプルで使いやすさを追求した 商用利用OKのフリー動画素材サイトです。 動画編集、余興、サプライズ、結婚式など幅広い用途でご使用いただける素材を取り揃えています。' },
      { hid: 'keywords', name: 'keywords', content: '動画素材,著作権無料,著作権フリー,カウントダウン,誕生日,サプライズ,youtube,moolike手書き風' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: "og:site_name", property: "og:site_name", content: "moolike | 無料動画素材サイト" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://www.moolike-stock.com/" },
      { hid: "og:title", property: "og:title", content: "moolike | 無料動画素材サイト" },
      { hid: "og:description", property: "og:description", content: "moolikeはシンプルで使いやすさを追求した 商用利用OKのフリー動画素材サイトです。 動画編集、余興、サプライズ、結婚式など幅広い用途でご使用いただける素材を取り揃えています。" },
      { hid: "og:image", property: "og:image", content: "/favicon.webp" },
      { hid: "twitter:image", name: "twitter:image", content: "/favicon.webp" },
      { name: "twitter:card", content: "summary" },
      { hid: "twitter:site", name: "twitter:site", content: "" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' },
      {
        rel: "canonical",
        href: `https://example.com${this.$route.path}`,
      }
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
    ['nuxt-lazy-load',{
      defaultImage: '/loading.gif'
    }],
    '@nuxtjs/google-gtag',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-9897424319453576',
      pageLevelAds: true,
    }],
    '@nuxtjs/axios',
  ],
  'google-gtag': {
    id: 'UA-204449124-1',
    debug: true, // Enable to track in dev mode.
  },

  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://www.moolike-stock.com",
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

