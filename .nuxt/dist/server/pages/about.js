exports.ids = [11];
exports.modules = {

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6b256309", content, true, context)
};

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_about_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page__subttl{display:inline-block;position:relative;z-index:3}.prof_wrap{display:flex}.p-sub_content{margin:0 auto}.prof_image{width:15%;margin-left:4rem}@media screen and (max-width:750px){.prof_wrap{display:block}.p-sub_content{width:340px;margin:0 auto}.prof_image{width:50%;margin:3rem auto}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/about.vue?vue&type=template&id=d8d768bc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"p-pankuzu\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("moolike")]),_vm._ssrNode("<span> &gt; </span> "),_c('NuxtLink',{staticClass:"p-pankuzu_inactive",attrs:{"to":"/guideline"}},[_vm._v("moolikeについて/About")])],2),_vm._ssrNode(" <h1 class=\"p-content_subTtl p-content_subTtl--underline\">moolikeについて/About</h1> "),_vm._ssrNode("<div class=\"p-sub_content\">","</div>",[_vm._ssrNode("<div class=\"page__block\"><div class=\"page__sub\"><h3 class=\"page__subttl\">moolikeは商用利用OKのシンプルな動画素材サイトです。</h3></div> <p class=\"page__desc\">\n        moolikeは運営者である私、pei.nagaeが動画制作を学習する上で生まれた動画素材を配信しているウェブサイトです。<br>\n        配信動画はシンプルで使いやすい物をピックアップし提供をしています。<br>\n        youtubeやサプライズムービーなど皆様の動画制作のお手伝いに慣れれば幸いです。<br>\n        投稿頻度は不定期でして、なかなか更新できない月もありますがご了承ください。（主に仕事が忙しいため...。）\n      </p></div> "),_vm._ssrNode("<div class=\"page__block\">","</div>",[_vm._ssrNode("<div class=\"page__sub\"><h3 class=\"page__subttl\">運営者 pei.nagaeについて</h3></div> "),_vm._ssrNode("<div class=\"prof_wrap\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<p class=\"page__desc\">\n            この度は当サイトに訪問いただきありがとうございます^^*<br>\n            仕事の傍、動画編集の学習をしている<span class=\"p-form__message__link\">pei.nagae</span>と申します。<br>\n            シンプルなものや可愛いもの、ナチュラルなものが好きなので、<br>そんな感じのテイストの素材をひっそりと制作しております!<br>\n            興味ある方はぜひダウンロードをお願いいたします。\n          </p> "),_vm._ssrNode("<p class=\"page__desc\">","</p>",[_vm._ssrNode("\n            その他個別作成依頼は随時受け付けています。<br>\n            youtube編集、サプライズ動画、結婚式ムービーなど作成をさせていただきますので<br>\n            興味のある方はぜひ"),_c('nuxt-link',{staticClass:"p-form__message__link",attrs:{"to":"/contact/"}},[_vm._v("お問い合わせフォーム")]),_vm._ssrNode("よりご相談ください。\n          ")],2)],2),_vm._ssrNode(" <div class=\"prof_image\"><img src=\"/pei.png\" alt=\"pei.nagaeの写真\"></div>")],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-more_btn\">","</div>",[_c('NuxtLink',{staticClass:"p-more_btn__link",attrs:{"to":"/"}},[_vm._v("\n  トップに戻る　\n")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=d8d768bc&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18);

// CONCATENATED MODULE: ./pages/about.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(215)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "24b22a58"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map