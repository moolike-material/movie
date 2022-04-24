exports.ids = [8];
exports.modules = {

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

/***/ 195:
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
      update_array: []
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
          console.log(aDL);
          aDL.click();
        };

        xhr.open('GET', url);
        xhr.send();
      });
    }

  },
  computed: {
    movies() {
      return this.$store.getters['movies/rankMovies'];
    },

    limitCount() {
      return this.movies.slice(0, 12);
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(148)["URL"]))

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/topMaterialRank.vue?vue&type=template&id=3bd6f592&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"p-material",attrs:{"appear":"","tag":"div"}},_vm._l((_vm.limitCount),function(movie,index){return _c('div',{key:movie.mv_id,staticClass:"p-material_item"},[_c('v-card',{staticClass:"mx-auto my-12"},[_c('div',{staticClass:"p-material_inner p-material_inner--mv"},[_c('NuxtLink',{attrs:{"to":("/detail/" + (movie.mv_id) + "/")}},[(_vm.today - movie.created.toDate().getTime() <= 10*24*60*60*1000)?_c('span',{staticClass:"p-material_new"},[_vm._v("new\n            ")]):_vm._e(),_vm._v(" "),_c('img',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"p-material_thumb",attrs:{"data-src":("/thumb/" + (movie.mv_id) + ".webp")}}),_vm._v(" "),(index == 0)?_c('div',{staticClass:"p-rank_color"},[_c('div',{staticClass:"p-rank_icon p-rank_icon--1"},[_c('v-icon',{staticClass:"p-rank_icon_icon"},[_vm._v("\n                  mdi-crown\n                ")]),_vm._v("\n                "+_vm._s(index+1)+"\n              ")],1)]):_vm._e(),_vm._v(" "),(index == 1)?_c('div',{staticClass:"p-rank_color"},[_c('div',{staticClass:"p-rank_icon p-rank_icon--2"},[_c('v-icon',{staticClass:"p-rank_icon_icon"},[_vm._v("\n                  mdi-crown\n                ")]),_vm._v("\n                "+_vm._s(index+1)+"\n              ")],1)]):_vm._e(),_vm._v(" "),(index == 2)?_c('div',{staticClass:"p-rank_color"},[_c('div',{staticClass:"p-rank_icon p-rank_icon--3"},[_c('v-icon',{staticClass:"p-rank_icon_icon"},[_vm._v("\n                  mdi-crown\n                ")]),_vm._v("\n                "+_vm._s(index+1)+"\n              ")],1)]):_vm._e(),_vm._v(" "),(index > 2)?_c('div',{staticClass:"p-rank_color"},[_c('div',{staticClass:"p-rank_icon p-rank_icon--4"},[_vm._v("\n                "+_vm._s(index+1)+"\n              ")])]):_vm._e()])],1),_vm._v(" "),_c('div',{staticClass:"p-material_inner"},[_c('NuxtLink',{attrs:{"to":("/detail/" + (movie.mv_id))}},[_c('div',{staticClass:"p-material_innerWrap"},[_c('h3',{staticClass:"p-material_ttl"},[_vm._v(_vm._s(movie.name))])])]),_vm._v(" "),_c('div',{staticClass:"p-material_iconWrap"},[_c('a',{attrs:{"href":("/mp4/" + (movie.mv_id) + "_mp4.zip"),"download":"","onclick":("gtag('event', 'Click', {'event_category': 'download', 'event_label': '" + (movie.mv_id) + "', 'value': '0'});")}},[_c('v-icon',{staticClass:"p-material_tag_icon"},[_vm._v("\n            mdi-download")])],1)])],1)])],1)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/topMaterialRank.vue?vue&type=template&id=3bd6f592&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/topMaterialRank.vue?vue&type=script&lang=js&
var topMaterialRankvue_type_script_lang_js_ = __webpack_require__(195);

// CONCATENATED MODULE: ./components/topMaterialRank.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_topMaterialRankvue_type_script_lang_js_ = (topMaterialRankvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(44);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(169);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// CONCATENATED MODULE: ./components/topMaterialRank.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_topMaterialRankvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7a6191ee"
  
)

/* harmony default export */ var topMaterialRank = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VCard: VCard["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=top-material-rank.js.map