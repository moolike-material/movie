exports.ids = [17];
exports.modules = {

/***/ 188:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.$store.dispatch('movies/getDetail', this.query).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let data = doc.data();
        self.name = data.name;
        self.desc = data.desc;
        self.yt_id = data.yt_id;
        self.mv_id = data.mv_id;
        self.length = data.length;
        self.tag1 = data.tag1;
        self.tag2 = data.tag2;
        self.tag3 = data.tag3;
        self.id = doc.id;
        self.count = data.dl_count;
        self.category = data.category;

        if (data.category == "youtube") {
          self.category == "youtube";
        } else if (data.category == "wedding") {
          self.category == "結婚式";
        } else if (data.category == "surprise") {
          self.category == "サプライズ";
        } else if (data.category == "business") {
          self.category == "ビジネス";
        } else {
          self.category == "その他";
        }

        if (self.tag1 == "handfree") {
          this.tag1name = "手書き風";
        } else if (self.tag1 == "filter") {
          this.tag1name = "フィルター";
        } else if (self.tag1 == "days") {
          this.tag1name = "日常";
        } else if (self.tag1 == "effect") {
          this.tag1name = "エフェクト";
        } else if (self.tag1 == "countdown") {
          this.tag1name = "カウントダウン";
        } else if (self.tag1 == "start") {
          this.tag1name = "スタート素材";
        } else if (self.tag1 == "background") {
          this.tag1name = "背景";
        } else if (self.tag1 == "people") {
          this.tag1name = "人物";
        } else if (self.tag1 == "interesting") {
          this.tag1name = "おもしろ";
        } else if (self.tag1 == "parody") {
          this.tag1name = "パロディ";
        } else if (self.tag1 == "music") {
          this.tag1name = "音楽";
        } else {
          this.tag1name = "その他";
        }

        if (self.tag2 == "handfree") {
          this.tag2name = "手書き風";
        } else if (self.tag2 == "filter") {
          this.tag2name = "フィルター";
        } else if (self.tag2 == "days") {
          this.tag2name = "日常";
        } else if (self.tag2 == "effect") {
          this.tag2name = "エフェクト";
        } else if (self.tag2 == "countdown") {
          this.tag2name = "カウントダウン";
        } else if (self.tag2 == "start") {
          this.tag2name = "スタート素材";
        } else if (self.tag2 == "background") {
          this.tag2name = "背景";
        } else if (self.tag2 == "people") {
          this.tag2name = "人物";
        } else if (self.tag2 == "interesting") {
          this.tag2name = "おもしろ";
        } else if (self.tag2 == "parody") {
          this.tag2name = "パロディ";
        } else if (self.tag2 == "music") {
          this.tag2name = "音楽";
        } else {
          this.tag2name = "その他";
        }

        if (self.tag3 == "handfree") {
          this.tag3name = "手書き風";
        } else if (self.tag3 == "filter") {
          this.tag3name = "フィルター";
        } else if (self.tag3 == "days") {
          this.tag3name = "日常";
        } else if (self.tag3 == "effect") {
          this.tag3name = "エフェクト";
        } else if (self.tag3 == "countdown") {
          this.tag3name = "カウントダウン";
        } else if (self.tag3 == "start") {
          this.tag3name = "スタート素材";
        } else if (self.tag3 == "background") {
          this.tag3name = "背景";
        } else if (self.tag3 == "people") {
          this.tag3name = "人物";
        } else if (self.tag3 == "interesting") {
          this.tag3name = "おもしろ";
        } else if (self.tag3 == "parody") {
          this.tag3name = "パロディ";
        } else if (self.tag3 == "music") {
          this.tag3name = "音楽";
        } else {
          this.tag3name = "その他";
        }
      });
    });
  },
  methods: {
    remove(id) {
      this.$store.dispatch('movies/remove', id);
    },

    setQuery() {
      this.query = this.$route.params.id || '';
    },

    downloadMp4() {
      let mvcount = this.count + 1;
      let mvarr = [this.id, mvcount];
      this.$store.dispatch('movies/dlcount', mvarr);
      let mp4 = this.mv_id + '_mp4.zip';
      this.$store.dispatch('movies/download', mp4).then(url => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';

        xhr.onload = event => {
          // blobがファイルのデータです
          const blob = xhr.response; // aタグをつくります※この辺は自由にアプリに合わせてください

          const aDL = document.createElement('a'); // ファイルデータに紐づくダウンロードリンクを設定します

          aDL.href = URL.createObjectURL(blob);
          aDL.download = `${this.mv_id}_mp4.zip`;
          console.log(aDL);
          aDL.click();
        };

        xhr.open('GET', url);
        xhr.send();
      });
    },

    downloadMov() {
      let mvcount = this.count + 1;
      let mvarr = [this.id, mvcount];
      this.$store.dispatch('movies/dlcount', mvarr);
      let movlef = this.mv_id + '_mov.zip';
      console.log(movlef);
      this.$store.dispatch('movies/downloadMov', movlef).then(url => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';

        xhr.onload = event => {
          // blobがファイルのデータです
          let blob = xhr.response; // aタグをつくります※この辺は自由にアプリに合わせてください

          let aDL = document.createElement('a'); // ファイルデータに紐づくダウンロードリンクを設定します

          aDL.href = URL.createObjectURL(blob);
          aDL.download = `${this.mv_id}_mov.zip`;
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
      return this.$store.state.movies.movies;
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(148)["URL"]))

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(235);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("73cdb309", content, true, context)
};

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(203);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".c-primary_btn{background-color:#1867c0!important;margin-top:1rem;margin-right:2rem;text-align:right}.c-btn{color:#000!important;border:1px solid #000;background-color:#fff!important;background:#fff!important}.youtube{position:relative;width:100%;padding-top:56.25%;border:2px solid #ccc}.youtube iframe{position:absolute;top:0;right:0;width:100%;height:100%}.p-material_wrap--detaol__ttl{margin-top:8rem}.p-content_main{margin-left:auto;margin-right:auto;width:90%}.p-attention_id{display:block;margin-top:1rem;margin-bottom:2rem}.page__orderlist{margin-top:2rem}.page__orderlist--id{padding-left:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/detail/_id.vue?vue&type=template&id=63c2a664&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-content"},[_vm._ssrNode("<div class=\"p-content_inner\">","</div>",[_vm._ssrNode("<div class=\"p-content_main\">","</div>",[_vm._ssrNode("<div class=\"p-pankuzu\">","</div>",[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("moolike")]),_vm._ssrNode("<span> &gt; </span> "),_c('NuxtLink',{staticClass:"p-pankuzu",attrs:{"to":"/newmaterial/"}},[_vm._v("素材一覧")]),_vm._ssrNode("<span> &gt; </span> "),_c('NuxtLink',{staticClass:"p-pankuzu_inactive",attrs:{"to":"/newmaterial/"}},[_vm._v(_vm._s(_vm.name))])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_detail\">","</div>",[_vm._ssrNode("<div class=\"p-material_detail__youtube\"><div class=\"youtube\"><iframe width=\"560\" height=\"315\""+(_vm._ssrAttr("src",("https://www.youtube.com/embed/" + _vm.yt_id)))+" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe></div> <div class=\"p-material_detail__dl\"><div class=\"p-material_detail__dl__item p-material_detail__dl__item--mp4\">\n              MP4形式でダウンロード</div> <div class=\"p-material_detail__dl__item p-material_detail__dl__item--mov\">\n              MOV形式でダウンロード</div></div> <span class=\"p-attention_id\" style=\"font-size:1rem; margin-bottom:2rem; color:#555\">\n          ※mp4データでは背景を透過させるために、グリーンバックで用意しています。<br>\n          ※movデータはダウンロードに時間がかかる場合がございます。（ボタンクリック後最大30秒程度）<br></span></div> "),_vm._ssrNode("<div class=\"p-material_detail__desc\">","</div>",[_vm._ssrNode("<h2 class=\"p-material_detail__ttl\">"+_vm._ssrEscape(_vm._s(_vm.name))+"</h2> <p class=\"p-material_detail__copy\" style=\"white-space: pre-wrap;\">"+_vm._ssrEscape(_vm._s(_vm.desc))+"</p> "),_vm._ssrNode("<div class=\"p-material_detail__desc_params\">","</div>",[_vm._ssrNode("<div class=\"p-material_detail__desc_params__item\">","</div>",[_c('v-icon',{staticStyle:{"font-size":"1.5rem","transform":"translateY(-2px)"},attrs:{"left":""}},[_vm._v("mdi-clock-outline")]),_vm._ssrNode(_vm._ssrEscape("再生時間 : "+_vm._s(_vm.length)))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_detail__desc_params__item\">","</div>",[_c('v-icon',{staticStyle:{"font-size":"1.5rem","transform":"translateY(-2px)"},attrs:{"left":""}},[_vm._v("mdi-monitor-screenshot")]),_vm._ssrNode("画面サイズ : 1920×1080")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_detail__desc_params__item\">","</div>",[_c('v-icon',{staticStyle:{"font-size":"1.5rem","transform":"translateY(-2px)"},attrs:{"left":""}},[_vm._v("mdi-image-multiple")]),_vm._ssrNode("フレームレート : 29.97fps")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_detail__desc_tags\">","</div>",[_c('v-chip',{staticClass:"ma-2",attrs:{"color":"pink p-category","label":"","text-color":"white"}},[_c('NuxtLink',{attrs:{"to":("/category/" + _vm.category + "/")}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("mdi-folder-multiple-outline")]),_vm._v("\n                "+_vm._s(_vm.category)+"\n              ")],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_detail__desc_tags\">","</div>",[_c('v-chip',{staticClass:"ma-2",attrs:{"color":"pink p-tag","label":"","text-color":"white"}},[_c('NuxtLink',{attrs:{"to":("/tags/" + _vm.tag1 + "/")}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("\n                  mdi-label\n                ")]),_vm._v("\n                "+_vm._s(_vm.tag1name)+"\n              ")],1)],1),_vm._ssrNode(" "),_c('v-chip',{staticClass:"ma-2",attrs:{"color":"pink p-tag","label":"","text-color":"white"}},[_c('NuxtLink',{attrs:{"to":("/tags/" + _vm.tag2 + "/")}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("\n                  mdi-label\n                ")]),_vm._v("\n                "+_vm._s(_vm.tag2name)+"\n              ")],1)],1),_vm._ssrNode(" "),_c('v-chip',{staticClass:"ma-2",attrs:{"color":"pink p-tag","label":"","text-color":"white"}},[_c('NuxtLink',{attrs:{"to":("/tags/" + _vm.tag3 + "/")}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("\n                  mdi-label\n                ")]),_vm._v("\n                "+_vm._s(_vm.tag3name)+"\n              ")],1)],1)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_wrap2\">","</div>",[_vm._ssrNode("<h2 class=\"p-content_section__ttl u-blk u-txtC\">動画素材の使用について</h2> "),_vm._ssrNode("<ol class=\"page__orderlist page__orderlist--id\">","</ol>",[_vm._ssrNode("<li class=\"page__item\">　個人利用・商用利用どちらにおいても使用いただけます。</li> <li class=\"page__item\">　利用に関して許可、報告、クレジットの表記は必要ありません。</li> <li class=\"page__item\">　素材に関しては自由に編集し使用してください。</li> <li class=\"page__item\">　著作権は放棄しておりません。動画そのものを素材として再配布することは禁止します。</li> "),_vm._ssrNode("<li class=\"page__item\">","</li>",[_vm._ssrNode("　質問等ございましたら"),_c('NuxtLink',{attrs:{"to":"/contact/"}},[_vm._v("お問い合せフォーム")]),_vm._ssrNode("よりご連絡をお願いします。")],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_wrap p-material_wrap--detail\">","</div>",[_vm._ssrNode("<h2 class=\"p-content_section__ttl\">人気のタグ特集</h2> "),_vm._ssrNode("<div class=\"p-bnr__register\">","</div>",[_c('NuxtLink',{staticClass:"p-bnr_item",attrs:{"to":"/category/wedding"}},[_c('img',{staticClass:"p-bnr_img",attrs:{"src":"/wedding.webp","alt":"おすすめタグ　カウントダウン"}}),_vm._v(" "),_c('p',{staticClass:"p-bnr_ttl"},[_vm._v("結婚式で使える動画素材")]),_vm._v(" "),_c('p',{staticClass:"p-bnr_copy"},[_vm._v("プロフィールムービーやオープニングムービーで使いやすい素材を取り揃えました！")])]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"p-bnr_item",attrs:{"to":"/category/countdown"}},[_c('img',{staticClass:"p-bnr_img",attrs:{"src":"/countdown.webp","alt":"おすすめタグ　カウントダウン"}}),_vm._v(" "),_c('p',{staticClass:"p-bnr_ttl"},[_vm._v("カウントダウンの無料素材")]),_vm._v(" "),_c('p',{staticClass:"p-bnr_copy"},[_vm._v("動画のスタートを個性豊かに演出できるカウントダウンのフリー素材です♪")])]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"p-bnr_item",attrs:{"to":"/category/handfree"}},[_c('img',{staticClass:"p-bnr_img",attrs:{"src":"/handfree.webp","alt":"おすすめタグ　手書き風"}}),_vm._v(" "),_c('p',{staticClass:"p-bnr_ttl"},[_vm._v("手書き風の無料素材")]),_vm._v(" "),_c('p',{staticClass:"p-bnr_copy"},[_vm._v("まるでイラストが描かれるかのように表示されるフリー素材を集めました♪ 温かさをプラスした動画演出に最適です！")])])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-material_wrap p-material_wrap--detail\">","</div>",[_vm._ssrNode("<h2 class=\"p-content_section__ttl\">最近人気の素材</h2> "),_c('topMaterialRank')],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-more_btn u-mT6\">","</div>",[_c('NuxtLink',{staticClass:"p-more_btn__link",attrs:{"to":"/"}},[_vm._v("\n      トップに戻る　\n    ")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/detail/_id.vue?vue&type=template&id=63c2a664&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/detail/_id.vue?vue&type=script&lang=js&
var _idvue_type_script_lang_js_ = __webpack_require__(188);

// CONCATENATED MODULE: ./pages/detail/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(44);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(59);

// CONCATENATED MODULE: ./pages/detail/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(234)
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
  "4c9900c1"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VChip: VChip["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=_id.js.map