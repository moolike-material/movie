(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{426:function(t,e,o){var content=o(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("cb154d66",content,!0,{sourceMap:!1})},453:function(t,e,o){"use strict";o(426)},454:function(t,e,o){var n=o(16)(!1);n.push([t.i,".c-primary_btn{background-color:#1867c0!important;margin-top:1rem;margin-right:2rem;text-align:right}.c-btn{color:#000!important;border:1px solid #000;background-color:#fff!important;background:#fff!important}.youtube{position:relative;width:100%;padding-top:56.25%}.youtube iframe{position:absolute;top:0;right:0;width:100%;height:100%}.p-material_wrap--detail{margin-top:5rem}.p-material_wrap--detaol__ttl{margin-top:8rem}",""]),t.exports=n},488:function(t,e,o){"use strict";o.r(e);o(33),o(20),o(38),o(46),o(265);var n={data:function(){return{id:"",name:"",desc:"",yt_id:"",mv_id:"",length:"",category:"",tag1:"",tag2:"",tag3:"",tag1name:"",tag2name:"",tag3name:"",movie_data:[],query:"",count:"",tags:[{tag:"手書き風",param:"handfree"},{tag:"フィルター",param:"filter"},{tag:"日常",param:"days"},{tag:"カウントダウン",param:"countdown"},{tag:"v-log",param:"v-log"},{tag:"サプライズ",param:"surprise"},{tag:"結婚式",param:"wedding"}]}},created:function(){var t=this;this.setQuery(),this.$store.dispatch("movies/init"),this.$store.dispatch("movies/get",this.query).then((function(e){var data=e.data();t.name=data.name,t.desc=data.desc,t.yt_id=data.yt_id,t.mv_id=data.mv_id,t.length=data.length,t.category=data.category,t.tag1=data.tag1,t.tag2=data.tag2,t.tag3=data.tag3,t.id=data.id,t.count=data.dl_count}))},methods:{remove:function(t){this.$store.dispatch("movies/remove",t)},setQuery:function(){this.query=this.$route.params.id||""},update:function(){this.movie_data.push(this.name),this.movie_data.push(this.desc),this.movie_data.push(this.yt_id),this.movie_data.push(this.mv_id),this.movie_data.push(this.length),this.movie_data.push(this.category),this.movie_data.push(this.tag1),this.movie_data.push(this.tag2),this.movie_data.push(this.tag3),this.movie_data.push(this.query),this.$store.dispatch("movies/update",this.movie_data),console.log("更新しました")},downloadMp4:function(){var t=this,e=this.count+1,o=[this.mv_id,e];this.$store.dispatch("movies/dlcount",o);var n=this.mv_id+".mp4";this.$store.dispatch("movies/download",n).then((function(e){var o=new XMLHttpRequest;o.responseType="blob",o.onload=function(e){var n=o.response,r=document.createElement("a");r.href=URL.createObjectURL(n),r.download="".concat(t.mv_id,".mp4"),console.log(r),r.click()},o.open("GET",e),o.send()}))},downloadMov:function(){var t=this,e=this.count+1,o=[this.mv_id,e];this.$store.dispatch("movies/dlcount",o);var n=this.mv_id+".mov";this.$store.dispatch("movies/downloadMov",n).then((function(e){var o=new XMLHttpRequest;o.responseType="blob",o.onload=function(e){var n=o.response,r=document.createElement("a");r.href=URL.createObjectURL(n),r.download="".concat(t.mv_id,".mov"),console.log(r),r.click()},o.open("GET",e),o.send()}))},downloadByUrlMov:function(){var t=this.count+1,e=[this.mv_id,t];this.$store.dispatch("movies/dlcount",e);var link=document.createElement("a");link.download="".concat(this.mv_id,".mov"),link.href="/dl/mov/".concat(this.mv_id,".mov"),link.click()}},computed:{movies:function(){return this.$store.state.movies.movies}}},r=(o(453),o(100)),l=o(210),c=o.n(l),d=o(206),_=o(205),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p-content"},[o("div",{staticClass:"p-content_inner"},[o("div",{staticClass:"p-content_main"},[o("div",{staticClass:"p-pankuzu"},[o("NuxtLink",{attrs:{to:"/"}},[t._v("moolike")]),o("span",[t._v(" > ")]),t._v(" "),o("NuxtLink",{staticClass:"p-pankuzu_inactive",attrs:{to:"/newmaterial/"}},[t._v("素材一覧")]),o("span",[t._v(" > ")]),t._v(" "),o("NuxtLink",{staticClass:"p-pankuzu_inactive",attrs:{to:"/newmaterial/"}},[t._v(t._s(t.name))])],1),t._v(" "),o("div",{staticClass:"p-material_detail"},[o("div",{staticClass:"p-material_detail__youtube"},[o("div",{staticClass:"youtube"},[o("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t.yt_id,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),o("div",{staticClass:"p-material_detail__dl"},[o("div",{staticClass:"p-material_detail__dl__item p-material_detail__dl__item--mp4",on:{click:function(e){return t.downloadMp4()}}},[t._v("\n              MP4形式でダウンロード")]),t._v(" "),o("div",{staticClass:"p-material_detail__dl__item p-material_detail__dl__item--mov",on:{click:function(e){return t.downloadByUrlMov()}}},[t._v("\n              MOV形式でダウンロード")])])]),t._v(" "),o("div",{staticClass:"p-material_detail__desc"},[o("h2",{staticClass:"p-material_detail__ttl"},[t._v(t._s(t.name))]),t._v(" "),o("p",{staticClass:"p-material_detail__copy"},[t._v(t._s(t.desc))]),t._v(" "),o("div",{staticClass:"p-material_detail__desc_params"},[o("div",{staticClass:"p-material_detail__desc_params__item"},[t._v("再生時間 : "+t._s(t.length))]),t._v(" "),o("div",{staticClass:"p-material_detail__desc_params__item"},[t._v("画面サイズ : 1920×1080")]),t._v(" "),o("div",{staticClass:"p-material_detail__desc_params__item"},[t._v("フレームレート : 29.97fps")])]),t._v(" "),o("div",{staticClass:"p-material_detail__desc_tags"},[o("v-chip",{staticClass:"ma-2",attrs:{color:"pink p-category",label:"","text-color":"white"}},[o("NuxtLink",{attrs:{to:"/category/"+t.category}},[o("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-folder-multiple-outline\n                ")]),t._v("\n                "+t._s(t.category)+"\n              ")],1)],1)],1),t._v(" "),o("div",{staticClass:"p-material_detail__desc_tags"},[o("v-chip",{staticClass:"ma-2",attrs:{color:"pink p-tag",label:"","text-color":"white"}},[o("NuxtLink",{attrs:{to:"/tags/"+t.tag1}},[o("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-label\n                ")]),t._v("\n                "+t._s(t.tag1)+"\n              ")],1)],1),t._v(" "),o("v-chip",{staticClass:"ma-2",attrs:{color:"pink p-tag",label:"","text-color":"white"}},[o("NuxtLink",{attrs:{to:"/tags/"+t.tag2}},[o("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-label\n                ")]),t._v("\n                "+t._s(t.tag2)+"\n              ")],1)],1),t._v(" "),o("v-chip",{staticClass:"ma-2",attrs:{color:"pink p-tag",label:"","text-color":"white"}},[o("NuxtLink",{attrs:{to:"/tags/"+t.tag3}},[o("v-icon",{attrs:{left:""}},[t._v("\n                  mdi-label\n                ")]),t._v("\n                "+t._s(t.tag3)+"\n              ")],1)],1)],1)])]),t._v(" "),o("div",{staticClass:"p-material_wrap p-material_wrap--detail"},[o("h2",{staticClass:"p-material_wrap--detail__ttl"},[t._v("最近人気の素材")]),t._v(" "),o("topMaterialRank")],1)])])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VChip:d.a,VIcon:_.a})}}]);