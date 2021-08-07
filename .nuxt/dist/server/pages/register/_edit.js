exports.ids = [19];
exports.modules = {

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7ee8ea06", content, true, context)
};

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
// Mixins



/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_mixins_binds_attrs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_2__[/* provide */ "b"])('form')
/* @vue/component */
).extend({
  name: 'v-form',

  provide() {
    return {
      form: this
    };
  },

  inheritAttrs: false,
  props: {
    disabled: Boolean,
    lazyValidation: Boolean,
    readonly: Boolean,
    value: Boolean
  },
  data: () => ({
    inputs: [],
    watchers: [],
    errorBag: {}
  }),
  watch: {
    errorBag: {
      handler(val) {
        const errors = Object.values(val).includes(true);
        this.$emit('input', !errors);
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    watchInput(input) {
      const watcher = input => {
        return input.$watch('hasError', val => {
          this.$set(this.errorBag, input._uid, val);
        }, {
          immediate: true
        });
      };

      const watchers = {
        _uid: input._uid,
        valid: () => {},
        shouldValidate: () => {}
      };

      if (this.lazyValidation) {
        // Only start watching inputs if we need to
        watchers.shouldValidate = input.$watch('shouldValidate', val => {
          if (!val) return; // Only watch if we're not already doing it

          if (this.errorBag.hasOwnProperty(input._uid)) return;
          watchers.valid = watcher(input);
        });
      } else {
        watchers.valid = watcher(input);
      }

      return watchers;
    },

    /** @public */
    validate() {
      return this.inputs.filter(input => !input.validate(true)).length === 0;
    },

    /** @public */
    reset() {
      this.inputs.forEach(input => input.reset());
      this.resetErrorBag();
    },

    resetErrorBag() {
      if (this.lazyValidation) {
        // Account for timeout in validatable
        setTimeout(() => {
          this.errorBag = {};
        }, 0);
      }
    },

    /** @public */
    resetValidation() {
      this.inputs.forEach(input => input.resetValidation());
      this.resetErrorBag();
    },

    register(input) {
      this.inputs.push(input);
      this.watchers.push(this.watchInput(input));
    },

    unregister(input) {
      const found = this.inputs.find(i => i._uid === input._uid);
      if (!found) return;
      const unwatch = this.watchers.find(i => i._uid === found._uid);

      if (unwatch) {
        unwatch.valid();
        unwatch.shouldValidate();
      }

      this.watchers = this.watchers.filter(i => i._uid !== found._uid);
      this.inputs = this.inputs.filter(i => i._uid !== found._uid);
      this.$delete(this.errorBag, found._uid);
    }

  },

  render(h) {
    return h('form', {
      staticClass: 'v-form',
      attrs: {
        novalidate: true,
        ...this.attrs$
      },
      on: {
        submit: e => this.$emit('submit', e)
      }
    }, this.$slots.default);
  }

}));

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".c-primary_btn{background-color:#1867c0!important;margin-top:1rem;margin-right:2rem;text-align:right}.c-btn{color:#000!important;border:1px solid #000;background-color:#fff!important;background:#fff!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register/_edit.vue?vue&type=template&id=78a8630e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-register_wrap"},[_vm._ssrNode("<div><h2>素材編集</h2></div> "),_c('v-form',{on:{"submit":function($event){$event.preventDefault();return _vm.add.apply(null, arguments)}}},[_c('v-text-field',{attrs:{"counter":10,"label":"Name","required":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('v-text-field',{attrs:{"counter":10,"label":"動画説明文","required":""},model:{value:(_vm.desc),callback:function ($$v) {_vm.desc=$$v},expression:"desc"}}),_vm._v(" "),_c('v-text-field',{attrs:{"counter":10,"label":"youtube ID","required":""},model:{value:(_vm.yt_id),callback:function ($$v) {_vm.yt_id=$$v},expression:"yt_id"}}),_vm._v(" "),_c('v-text-field',{attrs:{"counter":10,"label":"movie ID","required":""},model:{value:(_vm.mv_id),callback:function ($$v) {_vm.mv_id=$$v},expression:"mv_id"}}),_vm._v(" "),_c('v-text-field',{attrs:{"counter":10,"label":"尺","required":""},model:{value:(_vm.length),callback:function ($$v) {_vm.length=$$v},expression:"length"}}),_vm._v(" "),_c('v-text-field',{attrs:{"counter":10,"label":"カテゴリー","required":""},model:{value:(_vm.category),callback:function ($$v) {_vm.category=$$v},expression:"category"}}),_vm._v(" "),_c('v-text-field',{attrs:{"counter":10,"label":"タグ１","required":""},model:{value:(_vm.tag1),callback:function ($$v) {_vm.tag1=$$v},expression:"tag1"}}),_vm._v(" "),_c('v-text-field',{attrs:{"counter":10,"label":"タグ2","required":""},model:{value:(_vm.tag2),callback:function ($$v) {_vm.tag2=$$v},expression:"tag2"}}),_vm._v(" "),_c('v-text-field',{attrs:{"counter":10,"label":"タグ3","required":""},model:{value:(_vm.tag3),callback:function ($$v) {_vm.tag3=$$v},expression:"tag3"}}),_vm._v(" "),_c('v-btn',{staticClass:"mr-4 c-primary_btn",attrs:{"color":"success"},on:{"click":function($event){$event.preventDefault();return _vm.update()}}},[_vm._v("\n      更新する\n    ")]),_vm._v(" "),_c('v-btn',{staticClass:"mr-4 c-btn",attrs:{"color":"success","link":"","nuxt":"","to":"../register"}},[_vm._v("\n      一覧ページに戻る\n    ")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register/_edit.vue?vue&type=template&id=78a8630e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register/_edit.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _editvue_type_script_lang_js_ = ({
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
      movie_data: [],
      query: ''
    };
  },
  created: function () {
    let self = this;
    this.setQuery();
    this.$store.dispatch('movies/init');
    this.$store.dispatch('movies/get', this.query).then(function (doc) {
      let data = doc.data();
      self.name = data.name;
      self.desc = data.desc;
      self.yt_id = data.yt_id;
      self.mv_id = data.mv_id;
      self.length = data.length;
      self.category = data.category;
      self.tag1 = data.tag1;
      self.tag2 = data.tag2;
      self.tag3 = data.tag3;
    });
  },
  methods: {
    remove(id) {
      this.$store.dispatch('movies/remove', id);
    },

    setQuery() {
      this.query = this.$route.params.edit || '';
    },

    update() {
      //ムービーデータの作成
      this.movie_data.push(this.name);
      this.movie_data.push(this.desc);
      this.movie_data.push(this.yt_id);
      this.movie_data.push(this.mv_id);
      this.movie_data.push(this.length);
      this.movie_data.push(this.category);
      this.movie_data.push(this.tag1);
      this.movie_data.push(this.tag2);
      this.movie_data.push(this.tag3);
      this.movie_data.push(this.query);
      this.$store.dispatch('movies/update', this.movie_data);
      console.log('更新しました');
    }

  },
  computed: {
    movies() {
      return this.$store.state.movies.movies;
    }

  }
});
// CONCATENATED MODULE: ./pages/register/_edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var register_editvue_type_script_lang_js_ = (_editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(61);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(147);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VForm/VForm.js
var VForm = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 2 modules
var VTextField = __webpack_require__(18);

// CONCATENATED MODULE: ./pages/register/_edit.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(213)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  register_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "20aae25e"
  
)

/* harmony default export */ var _edit = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VBtn: VBtn["a" /* default */],VForm: VForm["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_edit.js.map