import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63e9078a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1042215d = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3cb5e626 = () => interopDefault(import('../pages/guideline.vue' /* webpackChunkName: "pages/guideline" */))
const _c1c4f9d2 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _7b40e604 = () => interopDefault(import('../pages/newmaterial.vue' /* webpackChunkName: "pages/newmaterial" */))
const _676e2cc5 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _7ff9ce73 = () => interopDefault(import('../pages/ranking.vue' /* webpackChunkName: "pages/ranking" */))
const _84f2908e = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _4ac9636b = () => interopDefault(import('../pages/submit.vue' /* webpackChunkName: "pages/submit" */))
const _34716f17 = () => interopDefault(import('../pages/register/movie.vue' /* webpackChunkName: "pages/register/movie" */))
const _56695942 = () => interopDefault(import('../pages/category/_category.vue' /* webpackChunkName: "pages/category/_category" */))
const _d912da62 = () => interopDefault(import('../pages/detail/_id.vue' /* webpackChunkName: "pages/detail/_id" */))
const _528ad250 = () => interopDefault(import('../pages/register/_edit.vue' /* webpackChunkName: "pages/register/_edit" */))
const _d5839c9a = () => interopDefault(import('../pages/search/_search.vue' /* webpackChunkName: "pages/search/_search" */))
const _2de2ba8e = () => interopDefault(import('../pages/tags/_tag.vue' /* webpackChunkName: "pages/tags/_tag" */))
const _f8be3b62 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _63e9078a,
    name: "about"
  }, {
    path: "/contact",
    component: _1042215d,
    name: "contact"
  }, {
    path: "/guideline",
    component: _3cb5e626,
    name: "guideline"
  }, {
    path: "/inspire",
    component: _c1c4f9d2,
    name: "inspire"
  }, {
    path: "/newmaterial",
    component: _7b40e604,
    name: "newmaterial"
  }, {
    path: "/privacy",
    component: _676e2cc5,
    name: "privacy"
  }, {
    path: "/ranking",
    component: _7ff9ce73,
    name: "ranking"
  }, {
    path: "/register",
    component: _84f2908e,
    name: "register"
  }, {
    path: "/submit",
    component: _4ac9636b,
    name: "submit"
  }, {
    path: "/register/movie",
    component: _34716f17,
    name: "register-movie"
  }, {
    path: "/category/:category?",
    component: _56695942,
    name: "category-category"
  }, {
    path: "/detail/:id?",
    component: _d912da62,
    name: "detail-id"
  }, {
    path: "/register/:edit",
    component: _528ad250,
    name: "register-edit"
  }, {
    path: "/search/:search?",
    component: _d5839c9a,
    name: "search-search"
  }, {
    path: "/tags/:tag?",
    component: _2de2ba8e,
    name: "tags-tag"
  }, {
    path: "/",
    component: _f8be3b62,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
