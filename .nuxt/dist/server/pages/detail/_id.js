exports.ids = [11];
exports.modules = {

/***/ 175:
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
      id: '',
      name: '',
      desc: '',
      yt_id: '',
      mv_id: '',
      length: '',
      category: '',
      tag1: '',
      tag2: '',
      tag3: '',
      tag1name: '',
      tag2name: '',
      tag3name: '',
      movie_data: [],
      query: '',
      count: '',
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
        tag: 'v-log',
        param: 'v-log'
      }, {
        tag: 'サプライズ',
        param: 'surprise'
      }, {
        tag: '結婚式',
        param: 'wedding'
      }]
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
      self.id = data.id;
      self.count = data.dl_count;
    });
  },
  methods: {
    remove(id) {
      this.$store.dispatch('movies/remove', id);
    },

    setQuery() {
      this.query = this.$route.params.id || '';
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
    },

    downloadMp4() {
      let mvcount = this.count + 1;
      let mvarr = [this.mv_id, mvcount];
      this.$store.dispatch('movies/dlcount', mvarr);
      let mp4 = this.mv_id + '.mp4';
      this.$store.dispatch('movies/download', mp4).then(url => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';

        xhr.onload = event => {
          // blobがファイルのデータです
          const blob = xhr.response; // aタグをつくります※この辺は自由にアプリに合わせてください

          const aDL = document.createElement('a'); // ファイルデータに紐づくダウンロードリンクを設定します

          aDL.href = URL.createObjectURL(blob);
          aDL.download = `${this.mv_id}.mp4`;
          console.log(aDL);
          aDL.click();
        };

        xhr.open('GET', url);
        xhr.send();
      });
    },

    downloadMov() {
      let mvcount = this.count + 1;
      let mvarr = [this.mv_id, mvcount];
      this.$store.dispatch('movies/dlcount', mvarr);
      let mov = this.mv_id + '.mov';
      this.$store.dispatch('movies/downloadMov', mov).then(url => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';

        xhr.onload = event => {
          // blobがファイルのデータです
          const blob = xhr.response; // aタグをつくります※この辺は自由にアプリに合わせてください

          const aDL = document.createElement('a'); // ファイルデータに紐づくダウンロードリンクを設定します

          aDL.href = URL.createObjectURL(blob);
          aDL.download = `${this.mv_id}.mov`;
          console.log(aDL);
          aDL.click();
        };

        xhr.open('GET', url);
        xhr.send();
      });
    },

    downloadByUrlMov() {
      let mvcount = this.count + 1;
      let mvarr = [this.mv_id, mvcount];
      this.$store.dispatch('movies/dlcount', mvarr);
      const link = document.createElement('a');
      link.download = `${this.mv_id}.mov`;
      link.href = `/dl/mov/${this.mv_id}.mov`;
      link.click();
    }

  },
  computed: {
    movies() {
      return this.$store.state.movies.movies;
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(145)["URL"]))

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("cb154d66", content, true, context)
};

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".c-primary_btn{background-color:#1867c0!important;margin-top:1rem;margin-right:2rem;text-align:right}.c-btn{color:#000!important;border:1px solid #000;background-color:#fff!important;background:#fff!important}.youtube{position:relative;width:100%;padding-top:56.25%}.youtube iframe{position:absolute;top:0;right:0;width:100%;height:100%}.p-material_wrap--detail{margin-top:5rem}.p-material_wrap--detaol__ttl{margin-top:8rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/detail/_id.vue?vue&type=template&id=0a1b9326&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-content"},[_vm._ssrNode("<div class=\"p-content_inner\">","</div>",[_vm._ssrNode("<div class=\"p-content_main\">","</div>",[_vm._ssrNode("<div class=\"p-pankuzu\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("moolike")]),_vm._ssrNode("<span> &gt; </span> "),_c('NuxtLink',{staticClass:"p-pankuzu_inactive",attrs:{"to":"/newmaterial/"}},[_vm._v("素材一覧")]),_vm._ssrNode("<span> &gt; </span> "),_c('NuxtLink',{staticClass:"p-pankuzu_inactive",attrs:{"to":"/newmaterial/"}},[_vm._v(_vm._s(_vm.name))])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_detail\">","</div>",[_vm._ssrNode("<div class=\"p-material_detail__youtube\"><div class=\"youtube\"><iframe width=\"560\" height=\"315\""+(_vm._ssrAttr("src",("https://www.youtube.com/embed/" + _vm.yt_id)))+" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe></div> <div class=\"p-material_detail__dl\"><div class=\"p-material_detail__dl__item p-material_detail__dl__item--mp4\">\n              MP4形式でダウンロード</div> <div class=\"p-material_detail__dl__item p-material_detail__dl__item--mov\">\n              MOV形式でダウンロード</div></div></div> "),_vm._ssrNode("<div class=\"p-material_detail__desc\">","</div>",[_vm._ssrNode("<h2 class=\"p-material_detail__ttl\">"+_vm._ssrEscape(_vm._s(_vm.name))+"</h2> <p class=\"p-material_detail__copy\">"+_vm._ssrEscape(_vm._s(_vm.desc))+"</p> <div class=\"p-material_detail__desc_params\"><div class=\"p-material_detail__desc_params__item\">"+_vm._ssrEscape("再生時間 : "+_vm._s(_vm.length))+"</div> <div class=\"p-material_detail__desc_params__item\">画面サイズ : 1920×1080</div> <div class=\"p-material_detail__desc_params__item\">フレームレート : 29.97fps</div></div> "),_vm._ssrNode("<div class=\"p-material_detail__desc_tags\">","</div>",[_c('v-chip',{staticClass:"ma-2",attrs:{"color":"pink p-category","label":"","text-color":"white"}},[_c('NuxtLink',{attrs:{"to":("/category/" + _vm.category)}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("\n                  mdi-folder-multiple-outline\n                ")]),_vm._v("\n                "+_vm._s(_vm.category)+"\n              ")],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_detail__desc_tags\">","</div>",[_c('v-chip',{staticClass:"ma-2",attrs:{"color":"pink p-tag","label":"","text-color":"white"}},[_c('NuxtLink',{attrs:{"to":("/tags/" + _vm.tag1)}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("\n                  mdi-label\n                ")]),_vm._v("\n                "+_vm._s(_vm.tag1)+"\n              ")],1)],1),_vm._ssrNode(" "),_c('v-chip',{staticClass:"ma-2",attrs:{"color":"pink p-tag","label":"","text-color":"white"}},[_c('NuxtLink',{attrs:{"to":("/tags/" + _vm.tag2)}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("\n                  mdi-label\n                ")]),_vm._v("\n                "+_vm._s(_vm.tag2)+"\n              ")],1)],1),_vm._ssrNode(" "),_c('v-chip',{staticClass:"ma-2",attrs:{"color":"pink p-tag","label":"","text-color":"white"}},[_c('NuxtLink',{attrs:{"to":("/tags/" + _vm.tag3)}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("\n                  mdi-label\n                ")]),_vm._v("\n                "+_vm._s(_vm.tag3)+"\n              ")],1)],1)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_wrap p-material_wrap--detail\">","</div>",[_vm._ssrNode("<h2 class=\"p-material_wrap--detail__ttl\">最近人気の素材</h2> "),_c('topMaterialRank')],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/detail/_id.vue?vue&type=template&id=0a1b9326&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/detail/_id.vue?vue&type=script&lang=js&
var _idvue_type_script_lang_js_ = __webpack_require__(175);

// CONCATENATED MODULE: ./pages/detail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(61);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(57);

// CONCATENATED MODULE: ./pages/detail/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "45ba9060"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VChip: VChip["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_id.js.map