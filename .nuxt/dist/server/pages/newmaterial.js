exports.ids = [21,6];
exports.modules = {

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("12071f3b", content, true, context)
};

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("e23b7040", content, true)

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".p-sidebar_ttl{font-weight:700;font-size:1.6rem;margin-bottom:1rem}.p-sidebar_category__item{font-size:1.4rem;padding:1rem;margin:.3rem 0;position:relative;transition:all .3s;cursor:pointer}.p-sidebar_category__item:after{content:\"\";position:absolute;width:10px;height:10px;border-color:transparent transparent #999 #999;border-style:solid;border-width:1px;top:50%;right:30px;transform:rotate(225deg) translateY(70%);transition:all .3s}.p-sidebar_category__item:hover{background-color:#e9e9e9;color:#1c4d50}.p-sidebar_category__item:hover:after{right:20px}.p-sidebar_contents{margin-top:4rem;position:relative;padding-top:4rem}.p-sidebar_contents:before{position:absolute;content:\"\";width:100%;height:.09rem;top:0;background:#e9e9e9}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/sidebar.vue?vue&type=template&id=abecd568&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar"},[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h3 class=\"p-sidebar_ttl\">カテゴリから探す</h3> "),_vm._l((_vm.categories),function(category){return _vm._ssrNode("<ul class=\"p-sidebar_category\">","</ul>",[_vm._ssrNode("<li class=\"p-sidebar_category__item\">","</li>",[_c('NuxtLink',{attrs:{"to":("/category/" + (category.id))}},[_vm._v("\n          "+_vm._s(category.name)+"\n        ")])],1)])})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-sidebar_contents\">","</div>",[_vm._ssrNode("<h3 class=\"p-sidebar_ttl\">タグから探す</h3> "),_vm._l((_vm.tags),function(tag){return _vm._ssrNode("<ul class=\"p-sidebar_category\">","</ul>",[_vm._ssrNode("<li class=\"p-sidebar_category__item\">","</li>",[_c('NuxtLink',{attrs:{"to":("/tags/" + (tag.param))}},[_vm._v("\n          "+_vm._s(tag.tag)+"\n        ")])],1)])})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-sidebar_contents\">","</div>",[_vm._ssrNode("<h3 class=\"p-sidebar_ttl\">その他</h3> "),_vm._ssrNode("<ul class=\"p-sidebar_category\">","</ul>",[_vm._ssrNode("<li class=\"p-sidebar_category__item\">","</li>",[_c('NuxtLink',{attrs:{"to":"/newmaterial/"}},[_vm._v("\n          新着素材\n          ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"p-sidebar_category__item\">","</li>",[_c('NuxtLink',{attrs:{"to":"/ranking/"}},[_vm._v("\n          人気素材\n          ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"p-sidebar_category__item\">","</li>",[_c('NuxtLink',{attrs:{"to":"/contact/"}},[_vm._v("\n          リクエスト/お問い合せ\n          ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"p-sidebar_category__item\">","</li>",[_c('NuxtLink',{attrs:{"to":"/about/"}},[_vm._v("\n          moolikeについて\n          ")])],1)],2),_vm._ssrNode(" "),_c('adsbygoogle',{staticStyle:{"margin":"3rem auto"},attrs:{"ad-slot":"6025646828"}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/sidebar.vue?vue&type=template&id=abecd568&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/sidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var sidebarvue_type_script_lang_js_ = ({
  data: function () {
    return {
      categories: [{
        "id": "youtube",
        "name": "youtube"
      }, {
        "id": "wedding",
        "name": "結婚式"
      }, {
        "id": "surprise",
        "name": "サプライズ"
      }, {
        "id": "business",
        "name": "ビジネス"
      }],
      tags: [{
        tag: '手書き風',
        param: 'handfree'
      }, {
        tag: 'フィルター',
        param: 'filter'
      }, {
        tag: '日常',
        param: 'days'
      }, {
        tag: 'カウントダウン',
        param: 'countdown'
      }, {
        tag: 'エフェクト',
        param: 'effect'
      }, {
        tag: 'スタート素材',
        param: 'start'
      }, {
        tag: '背景',
        param: 'background'
      }, {
        tag: '人物',
        param: 'people'
      }, {
        tag: 'おもしろ',
        param: 'interesting'
      }, {
        tag: 'パロディ',
        param: 'parody'
      }, {
        tag: 'おもしろ',
        param: 'music'
      }, {
        tag: 'その他',
        param: 'other'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_sidebarvue_type_script_lang_js_ = (sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18);

// CONCATENATED MODULE: ./components/sidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(163)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "206a097d"
  
)

/* harmony default export */ var sidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("7f6d4ad6", content, true)

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/* harmony import */ var _src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VCard_VCard_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ..._VSheet__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = _mixins_loadable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VPagination_VPagination_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(166);
/* harmony import */ var _src_components_VPagination_VPagination_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VPagination_VPagination_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _mixins_intersectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);

 // Directives

 // Mixins



 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], Object(_mixins_intersectable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({
  onVisible: ['init']
}), _mixins_themeable__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]).extend({
  name: 'v-pagination',
  directives: {
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  props: {
    circle: Boolean,
    disabled: Boolean,
    length: {
      type: Number,
      default: 0,
      validator: val => val % 1 === 0
    },
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    totalVisible: [Number, String],
    value: {
      type: Number,
      default: 0
    },
    pageAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.page'
    },
    currentPageAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.currentPage'
    },
    previousAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.previous'
    },
    nextAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.next'
    },
    wrapperAriaLabel: {
      type: String,
      default: '$vuetify.pagination.ariaLabel.wrapper'
    }
  },

  data() {
    return {
      maxButtons: 0,
      selected: null
    };
  },

  computed: {
    classes() {
      return {
        'v-pagination': true,
        'v-pagination--circle': this.circle,
        'v-pagination--disabled': this.disabled,
        ...this.themeClasses
      };
    },

    items() {
      const totalVisible = parseInt(this.totalVisible, 10);

      if (totalVisible === 0) {
        return [];
      }

      const maxLength = Math.min(Math.max(0, totalVisible) || this.length, Math.max(0, this.maxButtons) || this.length, this.length);

      if (this.length <= maxLength) {
        return this.range(1, this.length);
      }

      const even = maxLength % 2 === 0 ? 1 : 0;
      const left = Math.floor(maxLength / 2);
      const right = this.length - left + 1 + even;

      if (this.value > left && this.value < right) {
        const firstItem = 1;
        const lastItem = this.length;
        const start = this.value - left + 2;
        const end = this.value + left - 2 - even;
        const secondItem = start - 1 === firstItem + 1 ? 2 : '...';
        const beforeLastItem = end + 1 === lastItem - 1 ? end + 1 : '...';
        return [1, secondItem, ...this.range(start, end), beforeLastItem, this.length];
      } else if (this.value === left) {
        const end = this.value + left - 1 - even;
        return [...this.range(1, end), '...', this.length];
      } else if (this.value === right) {
        const start = this.value - left + 1;
        return [1, '...', ...this.range(start, this.length)];
      } else {
        return [...this.range(1, left), '...', ...this.range(right, this.length)];
      }
    }

  },
  watch: {
    value() {
      this.init();
    }

  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.selected = null;
      this.$nextTick(this.onResize); // TODO: Change this (f75dee3a, cbdf7caa)

      setTimeout(() => this.selected = this.value, 100);
    },

    onResize() {
      const width = this.$el && this.$el.parentElement ? this.$el.parentElement.clientWidth : window.innerWidth;
      this.maxButtons = Math.floor((width - 96) / 42);
    },

    next(e) {
      e.preventDefault();
      this.$emit('input', this.value + 1);
      this.$emit('next');
    },

    previous(e) {
      e.preventDefault();
      this.$emit('input', this.value - 1);
      this.$emit('previous');
    },

    range(from, to) {
      const range = [];
      from = from > 0 ? from : 1;

      for (let i = from; i <= to; i++) {
        range.push(i);
      }

      return range;
    },

    genIcon(h, icon, disabled, fn, label) {
      return h('li', [h('button', {
        staticClass: 'v-pagination__navigation',
        class: {
          'v-pagination__navigation--disabled': disabled
        },
        attrs: {
          disabled,
          type: 'button',
          'aria-label': label
        },
        on: disabled ? {} : {
          click: fn
        }
      }, [h(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], [icon])])]);
    },

    genItem(h, i) {
      const color = i === this.value && (this.color || 'primary');
      const isCurrentPage = i === this.value;
      const ariaLabel = isCurrentPage ? this.currentPageAriaLabel : this.pageAriaLabel;
      return h('button', this.setBackgroundColor(color, {
        staticClass: 'v-pagination__item',
        class: {
          'v-pagination__item--active': i === this.value
        },
        attrs: {
          type: 'button',
          'aria-current': isCurrentPage,
          'aria-label': this.$vuetify.lang.t(ariaLabel, i)
        },
        on: {
          click: () => this.$emit('input', i)
        }
      }), [i.toString()]);
    },

    genItems(h) {
      return this.items.map((i, index) => {
        return h('li', {
          key: index
        }, [isNaN(Number(i)) ? h('span', {
          class: 'v-pagination__more'
        }, [i.toString()]) : this.genItem(h, i)]);
      });
    },

    genList(h, children) {
      return h('ul', {
        directives: [{
          modifiers: {
            quiet: true
          },
          name: 'resize',
          value: this.onResize
        }],
        class: this.classes
      }, children);
    }

  },

  render(h) {
    const children = [this.genIcon(h, this.$vuetify.rtl ? this.nextIcon : this.prevIcon, this.value <= 1, this.previous, this.$vuetify.lang.t(this.previousAriaLabel)), this.genItems(h), this.genIcon(h, this.$vuetify.rtl ? this.prevIcon : this.nextIcon, this.value >= this.length, this.next, this.$vuetify.lang.t(this.nextAriaLabel))];
    return h('nav', {
      attrs: {
        role: 'navigation',
        'aria-label': this.$vuetify.lang.t(this.wrapperAriaLabel)
      }
    }, [this.genList(h, children)]);
  }

}));

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function () {
    return {
      name: '',
      desc: '',
      yt_id: '',
      mv_id: '',
      length: '',
      category: '',
      tag1: '',
      tag2: '',
      tag3: '',
      created: '',
      dl_count: '',
      movie_data: [],
      page: 1,
      today: '',
      week: 7 * 24 * 60 * 60 * 1000,
      update_array: [],
      current_page: 1,
      input: '',
      parPage: 12,
      loading: false
    };
  },
  created: function () {
    this.$store.dispatch('movies/init');
    let date = new Date();
    this.today = date.getTime();
  },
  methods: {
    remove(id) {
      this.$store.dispatch('movies/remove', id);
    },

    download(mv_id, id, count) {
      let mvcount = count + 1;
      let mvarr = [id, mvcount];
      this.$store.dispatch('movies/dlcount', mvarr);
      let mp4 = mv_id + '_mp4.zip';
      this.$store.dispatch('movies/download', mp4).then(url => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';

        xhr.onload = event => {
          // blobがファイルのデータです
          const blob = xhr.response; // aタグをつくります※この辺は自由にアプリに合わせてください

          const aDL = document.createElement('a'); // ファイルデータに紐づくダウンロードリンクを設定します

          aDL.href = URL.createObjectURL(blob);
          aDL.download = `${mv_id}_mp4.zip`;
          aDL.click();
        };

        xhr.open('GET', url);
        xhr.send();
      });
    },

    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1500);
      console.log("ヤッホー");
    }

  },
  computed: {
    movies() {
      // return this.$store.state.movies.movies
      return this.$store.getters['movies/orderdMovies'];
    },

    getMovies() {
      let current = this.current_page * this.parPage;
      let start = current - this.parPage;
      return this.movies.slice(start, current);
    },

    getPageCount() {
      return Math.ceil(this.movies.length / this.parPage);
    }

  },
  watch: {
    search() {
      this.current_page = 1;
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(148)["URL"]))

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/newmaterial.vue?vue&type=template&id=d9e43b9c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-content"},[_vm._ssrNode("<div class=\"p-content_inner\">","</div>",[_vm._ssrNode("<div class=\"p-content_main\">","</div>",[_vm._ssrNode("<div class=\"p-pankuzu\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("moolike")]),_vm._ssrNode("<span> &gt; </span> "),_c('NuxtLink',{staticClass:"p-pankuzu_inactive",attrs:{"to":"/newmaterial"}},[_vm._v("新着素材")])],2),_vm._ssrNode(" <h1 class=\"p-content_subTtl\">新着素材</h1> "),_c('transition-group',{staticClass:"p-material",attrs:{"appear":"","tag":"div"}},_vm._l((_vm.getMovies),function(movie){return _c('div',{key:movie.mv_id,staticClass:"p-material_item"},[_c('v-card',{staticClass:"mx-auto my-12"},[_c('div',{staticClass:"p-material_inner p-material_inner--mv"},[_c('NuxtLink',{attrs:{"to":("/detail/" + (movie.mv_id))}},[_c('img',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"p-material_thumb",attrs:{"data-src":("/thumb/" + (movie.mv_id) + ".webp")}}),_vm._v(" "),(_vm.today - movie.created.toDate().getTime() <= 10*24*60*60*1000)?_c('span',{staticClass:"p-material_new"},[_vm._v("new")]):_vm._e()])],1),_vm._v(" "),_c('div',{staticClass:"p-material_inner"},[_c('NuxtLink',{attrs:{"to":("/detail/" + (movie.mv_id))}},[_c('div',{staticClass:"p-material_innerWrap"},[_c('h3',{staticClass:"p-material_ttl"},[_vm._v(_vm._s(movie.name))])])]),_vm._v(" "),_c('div',{staticClass:"p-material_iconWrap"},[_c('v-icon',{staticClass:"p-material_tag_icon",on:{"click":function($event){return _vm.download(movie.mv_id,movie.id,movie.dl_count)}}},[_vm._v("\n                    mdi-download")])],1)],1)])],1)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-center\">","</div>",[_c('v-pagination',{staticClass:"p-page",attrs:{"length":_vm.getPageCount,"circle":""},model:{value:(_vm.current_page),callback:function ($$v) {_vm.current_page=$$v},expression:"current_page"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-more_btn u-mT6\">","</div>",[_c('NuxtLink',{staticClass:"p-more_btn__link",attrs:{"to":"/"}},[_vm._v("\n              トップに戻る　\n            ")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<aside class=\"p-sideber\">","</aside>",[_c('sidebar')],1)],2),_vm._ssrNode(" "+((_vm.loading)?("<div class=\"loader-wrap\"><div class=\"loader\">Loading...</div></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/newmaterial.vue?vue&type=template&id=d9e43b9c&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/newmaterial.vue?vue&type=script&lang=js&
var newmaterialvue_type_script_lang_js_ = __webpack_require__(174);

// CONCATENATED MODULE: ./pages/newmaterial.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_newmaterialvue_type_script_lang_js_ = (newmaterialvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(44);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VPagination/VPagination.js
var VPagination = __webpack_require__(171);

// CONCATENATED MODULE: ./pages/newmaterial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_newmaterialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3327935c"
  
)

/* harmony default export */ var newmaterial = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Sidebar: __webpack_require__(165).default})


/* vuetify-loader */




installComponents_default()(component, {VCard: VCard["a" /* default */],VIcon: VIcon["a" /* default */],VPagination: VPagination["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=newmaterial.js.map