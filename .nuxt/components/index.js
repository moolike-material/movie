import { wrapFunctional } from './utils'

export { default as Loading } from '../../components/Loading.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Category } from '../../components/category.vue'
export { default as Headingline } from '../../components/headingline.vue'
export { default as MoolikeLogo } from '../../components/moolikeLogo.vue'
export { default as MoolikeLogowhite } from '../../components/moolikeLogowhite.vue'
export { default as Sidebar } from '../../components/sidebar.vue'
export { default as TopMaterialNew } from '../../components/topMaterialNew.vue'
export { default as TopMaterialRank } from '../../components/topMaterialRank.vue'

export const LazyLoading = import('../../components/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorial = import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyCategory = import('../../components/category.vue' /* webpackChunkName: "components/category" */).then(c => wrapFunctional(c.default || c))
export const LazyHeadingline = import('../../components/headingline.vue' /* webpackChunkName: "components/headingline" */).then(c => wrapFunctional(c.default || c))
export const LazyMoolikeLogo = import('../../components/moolikeLogo.vue' /* webpackChunkName: "components/moolike-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMoolikeLogowhite = import('../../components/moolikeLogowhite.vue' /* webpackChunkName: "components/moolike-logowhite" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../../components/sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyTopMaterialNew = import('../../components/topMaterialNew.vue' /* webpackChunkName: "components/top-material-new" */).then(c => wrapFunctional(c.default || c))
export const LazyTopMaterialRank = import('../../components/topMaterialRank.vue' /* webpackChunkName: "components/top-material-rank" */).then(c => wrapFunctional(c.default || c))
