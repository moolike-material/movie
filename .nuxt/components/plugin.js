import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Loading: () => import('../../components/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c)),
  NuxtLogo: () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  Tutorial: () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c)),
  Headingline: () => import('../../components/headingline.vue' /* webpackChunkName: "components/headingline" */).then(c => wrapFunctional(c.default || c)),
  MoolikeLogo: () => import('../../components/moolikeLogo.vue' /* webpackChunkName: "components/moolike-logo" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../../components/sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c)),
  TopMaterialNew: () => import('../../components/topMaterialNew.vue' /* webpackChunkName: "components/top-material-new" */).then(c => wrapFunctional(c.default || c)),
  TopMaterialRank: () => import('../../components/topMaterialRank.vue' /* webpackChunkName: "components/top-material-rank" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
