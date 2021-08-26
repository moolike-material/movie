import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _90d0bf78 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _32ad7397 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1684b8a7 = () => interopDefault(import('../pages/guideline.vue' /* webpackChunkName: "pages/guideline" */))
const _7cee555e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _1236e984 = () => interopDefault(import('../pages/newmaterial.vue' /* webpackChunkName: "pages/newmaterial" */))
const _ec4d0202 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _bb35bea6 = () => interopDefault(import('../pages/ranking.vue' /* webpackChunkName: "pages/ranking" */))
const _73c15f82 = () => interopDefault(import('../pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _3d0a079d = () => interopDefault(import('../pages/register/movie.vue' /* webpackChunkName: "pages/register/movie" */))
const _36b838e5 = () => interopDefault(import('../pages/category/_category.vue' /* webpackChunkName: "pages/category/_category" */))
const _0ae74356 = () => interopDefault(import('../pages/detail/_id.vue' /* webpackChunkName: "pages/detail/_id" */))
const _5b236ad6 = () => interopDefault(import('../pages/register/_edit.vue' /* webpackChunkName: "pages/register/_edit" */))
const _c4526b8e = () => interopDefault(import('../pages/search/_search.vue' /* webpackChunkName: "pages/search/_search" */))
const _62c26648 = () => interopDefault(import('../pages/tags/_tag.vue' /* webpackChunkName: "pages/tags/_tag" */))
const _516109ee = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _90d0bf78,
    name: "about"
  }, {
    path: "/contact",
    component: _32ad7397,
    name: "contact"
  }, {
    path: "/guideline",
    component: _1684b8a7,
    name: "guideline"
  }, {
    path: "/inspire",
    component: _7cee555e,
    name: "inspire"
  }, {
    path: "/newmaterial",
    component: _1236e984,
    name: "newmaterial"
  }, {
    path: "/privacy",
    component: _ec4d0202,
    name: "privacy"
  }, {
    path: "/ranking",
    component: _bb35bea6,
    name: "ranking"
  }, {
    path: "/register",
    component: _73c15f82,
    name: "register"
  }, {
    path: "/register/movie",
    component: _3d0a079d,
    name: "register-movie"
  }, {
    path: "/category/:category?",
    component: _36b838e5,
    name: "category-category"
  }, {
    path: "/detail/:id?",
    component: _0ae74356,
    name: "detail-id"
  }, {
    path: "/register/:edit",
    component: _5b236ad6,
    name: "register-edit"
  }, {
    path: "/search/:search?",
    component: _c4526b8e,
    name: "search-search"
  }, {
    path: "/tags/:tag?",
    component: _62c26648,
    name: "tags-tag"
  }, {
    path: "/",
    component: _516109ee,
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
