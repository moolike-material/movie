(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{455:function(t,e,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("73cdb309",content,!0,{sourceMap:!1})},494:function(t,e,n){"use strict";n(455)},495:function(t,e,n){var r=n(17)(!1);r.push([t.i,".c-primary_btn{background-color:#1867c0!important;margin-top:1rem;margin-right:2rem;text-align:right}.c-btn{color:#000!important;border:1px solid #000;background-color:#fff!important;background:#fff!important}.youtube{position:relative;width:100%;padding-top:56.25%;border:2px solid #ccc}.youtube iframe{position:absolute;top:0;right:0;width:100%;height:100%}.p-material_wrap--detaol__ttl{margin-top:8rem}.p-content_main{margin-left:auto;margin-right:auto;width:90%}.p-attention_id{display:block;margin-top:1rem;margin-bottom:2rem}.page__orderlist{margin-top:2rem}.page__orderlist--id{padding-left:0}",""]),t.exports=r},527:function(t,e,n){"use strict";n.r(e);n(8),n(29),n(19),n(35),n(41),n(276);var r={data:function(){return{id:"",name:"",desc:"",yt_id:"",mv_id:"",length:"",category:"",tag1:"",tag2:"",tag3:"",tag1name:"",tag2name:"",tag3name:"",movie_data:[],query:"",count:"",tags:[{tag:"手書き風",param:"handfree"},{tag:"フィルター",param:"filter"},{tag:"日常",param:"days"},{tag:"カウントダウン",param:"countdown"},{tag:"v-log",param:"v-log"},{tag:"サプライズ",param:"surprise"},{tag:"結婚式",param:"wedding"}]}},created:function(){var t=this,e=this;this.setQuery(),this.$store.dispatch("movies/init"),this.$store.dispatch("movies/getDetail",this.query).then((function(n){n.forEach((function(n){var data=n.data();e.name=data.name,e.desc=data.desc,e.yt_id=data.yt_id,e.mv_id=data.mv_id,e.length=data.length,e.tag1=data.tag1,e.tag2=data.tag2,e.tag3=data.tag3,e.id=n.id,e.count=data.dl_count,e.category=data.category,"youtube"==data.category||"wedding"==data.category||"surprise"==data.category||data.category,e.category,"handfree"==e.tag1?t.tag1name="手書き風":"filter"==e.tag1?t.tag1name="フィルター":"days"==e.tag1?t.tag1name="日常":"effect"==e.tag1?t.tag1name="エフェクト":"countdown"==e.tag1?t.tag1name="カウントダウン":"start"==e.tag1?t.tag1name="スタート素材":"background"==e.tag1?t.tag1name="背景":"people"==e.tag1?t.tag1name="人物":"interesting"==e.tag1?t.tag1name="おもしろ":"parody"==e.tag1?t.tag1name="パロディ":"music"==e.tag1?t.tag1name="音楽":t.tag1name="その他","handfree"==e.tag2?t.tag2name="手書き風":"filter"==e.tag2?t.tag2name="フィルター":"days"==e.tag2?t.tag2name="日常":"effect"==e.tag2?t.tag2name="エフェクト":"countdown"==e.tag2?t.tag2name="カウントダウン":"start"==e.tag2?t.tag2name="スタート素材":"background"==e.tag2?t.tag2name="背景":"people"==e.tag2?t.tag2name="人物":"interesting"==e.tag2?t.tag2name="おもしろ":"parody"==e.tag2?t.tag2name="パロディ":"music"==e.tag2?t.tag2name="音楽":t.tag2name="その他","handfree"==e.tag3?t.tag3name="手書き風":"filter"==e.tag3?t.tag3name="フィルター":"days"==e.tag3?t.tag3name="日常":"effect"==e.tag3?t.tag3name="エフェクト":"countdown"==e.tag3?t.tag3name="カウントダウン":"start"==e.tag3?t.tag3name="スタート素材":"background"==e.tag3?t.tag3name="背景":"people"==e.tag3?t.tag3name="人物":"interesting"==e.tag3?t.tag3name="おもしろ":"parody"==e.tag3?t.tag3name="パロディ":"music"==e.tag3?t.tag3name="音楽":t.tag3name="その他"}))}))},methods:{remove:function(t){this.$store.dispatch("movies/remove",t)},setQuery:function(){this.query=this.$route.params.id||""},downloadMp4:function(){var t=this,e=this.count+1,n=[this.id,e];this.$store.dispatch("movies/dlcount",n);var r=this.mv_id+"_mp4.zip";this.$store.dispatch("movies/download",r).then((function(e){var n=new XMLHttpRequest;n.responseType="blob",n.onload=function(e){var r=n.response,o=document.createElement("a");o.href=URL.createObjectURL(r),o.download="".concat(t.mv_id,"_mp4.zip"),console.log(o),o.click()},n.open("GET",e),n.send()}))},downloadMov:function(){var t=this,e=this.count+1,n=[this.id,e];this.$store.dispatch("movies/dlcount",n);var r=this.mv_id+"_mov.zip";console.log(r),this.$store.dispatch("movies/downloadMov",r).then((function(e){var n=new XMLHttpRequest;n.responseType="blob",n.onload=function(e){var r=n.response,o=document.createElement("a");o.href=URL.createObjectURL(r),o.download="".concat(t.mv_id,"_mov.zip"),console.log(o),o.click()},n.open("GET",e),n.send()}))}},computed:{movies:function(){return this.$store.state.movies.movies}}},o=(n(494),n(85)),l=n(163),c=n.n(l),_=n(210),m=n(209),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-content"},[n("div",{staticClass:"p-content_inner"},[n("div",{staticClass:"p-content_main"},[n("div",{staticClass:"p-pankuzu"},[n("NuxtLink",{attrs:{to:"/"}},[t._v("moolike")]),n("span",[t._v(" > ")]),t._v(" "),n("NuxtLink",{staticClass:"p-pankuzu",attrs:{to:"/newmaterial/"}},[t._v("素材一覧")]),n("span",[t._v(" > ")]),t._v(" "),n("NuxtLink",{staticClass:"p-pankuzu_inactive",attrs:{to:"/newmaterial/"}},[t._v(t._s(t.name))])],1),t._v(" "),n("div",{staticClass:"p-material_detail"},[n("div",{staticClass:"p-material_detail__youtube"},[n("div",{staticClass:"youtube"},[n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t.yt_id,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),n("div",{staticClass:"p-material_detail__dl"},[n("div",{staticClass:"p-material_detail__dl__item p-material_detail__dl__item--mp4",on:{click:function(e){return t.downloadMp4()}}},[t._v("\n              MP4形式でダウンロード")]),t._v(" "),n("div",{staticClass:"p-material_detail__dl__item p-material_detail__dl__item--mov",on:{click:function(e){return t.downloadMov()}}},[t._v("\n              MOV形式でダウンロード")])]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"p-material_detail__desc"},[n("h2",{staticClass:"p-material_detail__ttl"},[t._v(t._s(t.name))]),t._v(" "),n("p",{staticClass:"p-material_detail__copy",staticStyle:{"white-space":"pre-wrap"},domProps:{textContent:t._s(t.desc)}}),t._v(" "),n("div",{staticClass:"p-material_detail__desc_params"},[n("div",{staticClass:"p-material_detail__desc_params__item"},[n("v-icon",{staticStyle:{"font-size":"1.5rem",transform:"translateY(-2px)"},attrs:{left:""}},[t._v("mdi-clock-outline")]),t._v("再生時間 : "+t._s(t.length))],1),t._v(" "),n("div",{staticClass:"p-material_detail__desc_params__item"},[n("v-icon",{staticStyle:{"font-size":"1.5rem",transform:"translateY(-2px)"},attrs:{left:""}},[t._v("mdi-monitor-screenshot")]),t._v("画面サイズ : 1920×1080")],1),t._v(" "),n("div",{staticClass:"p-material_detail__desc_params__item"},[n("v-icon",{staticStyle:{"font-size":"1.5rem",transform:"translateY(-2px)"},attrs:{left:""}},[t._v("mdi-image-multiple")]),t._v("フレームレート : 29.97fps")],1)]),t._v(" "),n("div",{staticClass:"p-material_detail__desc_tags"},[n("v-chip",{staticClass:"ma-2",attrs:{color:"pink p-category",label:"","text-color":"white"}},[n("NuxtLink",{attrs:{to:"/category/"+t.category+"/"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-folder-multiple-outline")]),t._v("\n                "+t._s(t.category)+"\n              ")],1)],1)],1),t._v(" "),n("div",{staticClass:"p-material_detail__desc_tags"},[n("v-chip",{staticClass:"ma-2",attrs:{color:"pink p-tag",label:"","text-color":"white"}},[n("NuxtLink",{attrs:{to:"/tags/"+t.tag1+"/"}},[n("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-label\n                ")]),t._v("\n                "+t._s(t.tag1name)+"\n              ")],1)],1),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"pink p-tag",label:"","text-color":"white"}},[n("NuxtLink",{attrs:{to:"/tags/"+t.tag2+"/"}},[n("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-label\n                ")]),t._v("\n                "+t._s(t.tag2name)+"\n              ")],1)],1),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"pink p-tag",label:"","text-color":"white"}},[n("NuxtLink",{attrs:{to:"/tags/"+t.tag3+"/"}},[n("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-label\n                ")]),t._v("\n                "+t._s(t.tag3name)+"\n              ")],1)],1)],1)])]),t._v(" "),n("div",{staticClass:"p-material_wrap2"},[n("h2",{staticClass:"p-content_section__ttl u-blk u-txtC"},[t._v("動画素材の使用について")]),t._v(" "),n("ol",{staticClass:"page__orderlist page__orderlist--id"},[n("li",{staticClass:"page__item"},[t._v("　個人利用・商用利用どちらにおいても使用いただけます。")]),t._v(" "),n("li",{staticClass:"page__item"},[t._v("　利用に関して許可、報告、クレジットの表記は必要ありません。")]),t._v(" "),n("li",{staticClass:"page__item"},[t._v("　素材に関しては自由に編集し使用してください。")]),t._v(" "),n("li",{staticClass:"page__item"},[t._v("　著作権は放棄しておりません。動画そのものを素材として再配布することは禁止します。")]),t._v(" "),n("li",{staticClass:"page__item"},[t._v("　質問等ございましたら"),n("NuxtLink",{attrs:{to:"/contact/"}},[t._v("お問い合せフォーム")]),t._v("よりご連絡をお願いします。")],1)])]),t._v(" "),n("div",{staticClass:"p-material_wrap p-material_wrap--detail"},[n("h2",{staticClass:"p-content_section__ttl"},[t._v("人気のタグ特集")]),t._v(" "),n("div",{staticClass:"p-bnr__register"},[n("NuxtLink",{staticClass:"p-bnr_item",attrs:{to:"/category/wedding"}},[n("img",{staticClass:"p-bnr_img",attrs:{src:"/wedding.webp",alt:"おすすめタグ　カウントダウン"}}),t._v(" "),n("p",{staticClass:"p-bnr_ttl"},[t._v("結婚式で使える動画素材")]),t._v(" "),n("p",{staticClass:"p-bnr_copy"},[t._v("プロフィールムービーやオープニングムービーで使いやすい素材を取り揃えました！")])]),t._v(" "),n("NuxtLink",{staticClass:"p-bnr_item",attrs:{to:"/category/countdown"}},[n("img",{staticClass:"p-bnr_img",attrs:{src:"/countdown.webp",alt:"おすすめタグ　カウントダウン"}}),t._v(" "),n("p",{staticClass:"p-bnr_ttl"},[t._v("カウントダウンの無料素材")]),t._v(" "),n("p",{staticClass:"p-bnr_copy"},[t._v("動画のスタートを個性豊かに演出できるカウントダウンのフリー素材です♪")])]),t._v(" "),n("NuxtLink",{staticClass:"p-bnr_item",attrs:{to:"/category/handfree"}},[n("img",{staticClass:"p-bnr_img",attrs:{src:"/handfree.webp",alt:"おすすめタグ　手書き風"}}),t._v(" "),n("p",{staticClass:"p-bnr_ttl"},[t._v("手書き風の無料素材")]),t._v(" "),n("p",{staticClass:"p-bnr_copy"},[t._v("まるでイラストが描かれるかのように表示されるフリー素材を集めました♪ 温かさをプラスした動画演出に最適です！")])])],1)]),t._v(" "),n("div",{staticClass:"p-material_wrap p-material_wrap--detail"},[n("h2",{staticClass:"p-content_section__ttl"},[t._v("最近人気の素材")]),t._v(" "),n("topMaterialRank")],1)])]),t._v(" "),n("div",{staticClass:"p-more_btn u-mT6"},[n("NuxtLink",{staticClass:"p-more_btn__link",attrs:{to:"/"}},[t._v("\n      トップに戻る　\n    ")])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"p-attention_id",staticStyle:{"font-size":"1rem","margin-bottom":"2rem",color:"#555"}},[t._v("\n          ※mp4データでは背景を透過させるために、グリーンバックで用意しています。"),n("br"),t._v("\n          ※movデータはダウンロードに時間がかかる場合がございます。（ボタンクリック後最大30秒程度）"),n("br")])}],!1,null,null,null);e.default=component.exports;c()(component,{VChip:_.a,VIcon:m.a})}}]);