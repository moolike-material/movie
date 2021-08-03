exports.ids = [17];
exports.modules = {

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4a4a60da", content, true, context)
};

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".page__block{margin-top:3rem}.page__subttl{font-size:1rem;font-weight:700;letter-spacing:.18em}.page__desc{margin-top:1rem;font-size:.8rem;line-height:1.85;letter-spacing:.07em;padding-left:1rem}.btn{margin-top:3rem;margin-bottom:3rem;text-align:center}.btn__link{display:inline-block;width:150px;height:30px;line-height:30px;font-size:.8rem;font-weight:700;border:1px solid #333!important;border-radius:.5rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/privacy.vue?vue&type=template&id=1478b9f1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"p-pankuzu\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("moolike")]),_vm._ssrNode("<span> &gt; </span> "),_c('NuxtLink',{staticClass:"p-pankuzu_inactive",attrs:{"to":"/privacy"}},[_vm._v("プライバシーポリシー")])],2),_vm._ssrNode(" <h1 class=\"p-content_subTtl p-content_subTtl--underline\">プライバシーポリシー/privacy policy</h1> "),_vm._ssrNode("<div class=\"p-sub_content\">","</div>",[_vm._ssrNode("<div class=\"page__block\"><h3 class=\"page__subttl\">moolikeは商用利用OKのシンプルな動画素材サイトです。</h3> <p class=\"page__desc\">\n                当ウェブサイトは、第三者配信の広告サービス「Google Adsense グーグルアドセンス」を利用しており、<br>\n                この広告配信事業者は、ユーザーの好みに応じて広告を表示するCookieを使用することがあります。<br>\n                Cookieの設定やGoogleアドセンスに関する詳細は、こちらをご覧ください。\n            </p></div> <div class=\"page__block\"><h3 class=\"page__subttl\">アクセス解析ツールについて</h3> <p class=\"page__desc\">\n                当サイトは、アクセス解析ツールである「Googleアナリティクス」を利用しています。<br>\n                これは、データ収集のためにCookieを使用しています。また、トラフィックデータが匿名で収集されていますが、<br>\n                個人を特定するものではありません。この機能を停止するには、ブラウザ設定にてCookieを無効にしてください。<br>\n                詳細については、こちらをご覧ください。\n            </p></div> <div class=\"page__block\"><h3 class=\"page__subttl\">免責事項について</h3> <p class=\"page__desc\">\n                当サイトに掲載している画像の著作権や肖像権等は各権利所有者に帰属します。権利を侵害する目的はございません。<br>\n                素材などのコンテンツに問題がありましたら、ご連絡ください。<br>\n                当サイトのリンクから他サイトに移動した場合、そのサイトで提供される情報等については、一切の責任を負いません。<br>\n                また、当サイトに掲載されたコンテンツによって生じた損害等については、一切の責任を負いかねますのでご了承ください。\n            </p></div> "),_vm._ssrNode("<div class=\"btn\">","</div>",[_c('NuxtLink',{staticClass:"btn__link",attrs:{"to":"/"}},[_vm._v("トップに戻る")])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/privacy.vue?vue&type=template&id=1478b9f1&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(24);

// CONCATENATED MODULE: ./pages/privacy.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(200)
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
  "7471e138"
  
)

/* harmony default export */ var privacy = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=privacy.js.map