<template>
  <div>
    <!-- #region ヘッダー -->
    <header class="p-header">
        <div class="p-header_inner">
          <NuxtLink to="/">
            <h1 class="p-header_ttl">
              <img src="/ttl--white.webp" alt="moolike シンプルな動画素材サイト">
            </h1>
          </NuxtLink>
          <form @submit.prevent="searchSubmit" class="p-header_search">
            <v-autocomplete :search-input.sync="search" label="動画をキーワードで探す" class="p-header_searchInput"></v-autocomplete>
          </form>
          <nav class="p-nav" id="nav">
            <ul class="p-nav_list">
              <li class="p-nav_item">
                <NuxtLink to="/newmaterial/" class="p-nav_link" @click="togglemenu">新着素材</NuxtLink>
              </li>
              <li class="p-nav_item">
                <NuxtLink to="/ranking/" href="#" class="p-nav_link" @click="togglemenu">ランキング</NuxtLink>
              </li>
              <li class="p-nav_item">
                <NuxtLink to="/contact/" href="#" class="p-nav_link" @click="togglemenu">リクエスト</NuxtLink>
              </li>
            </ul>
          </nav>
          <div :class="{'is-p-header_hum_active' : isHumActive }">
            <div class="p-header_hum" id="#hum" v-on:click="togglemenu">
              <div class="p-header_hum__line p-header_hum__line--1"></div>
              <div class="p-header_hum__line p-header_hum__line--2"></div>
              <div class="p-header_hum__bg"></div>
              <category />
            </div>
          </div>
        </div>
    </header>
    <!-- #endregion ヘッダー -->

    <!-- メインコンテンツ -->
    <v-main class="main">
      <v-container>
        <Nuxt />
        <section class="p-content_section p-content_section--tags">
          <h2 class="p-content_section__ttl u-txtL u-pL2">キーワードから探す</h2>
          <div class="p-keywords_category">
            <NuxtLink :to="`/category/${category.id}`" class="p-keywords_category__link" v-for="category in categories" :key="category.id">
              {{category.name}}
            </NuxtLink>
          </div>
          <div class="p-keywords_tags u-mT3">
            <NuxtLink :to="`/tags/${tag.param}`" class="p-keywords_tags__link" v-for="tag in tags" :key="tag.tag">
              # {{tag.tag}}
            </NuxtLink>
          </div>
        </section>
      </v-container>
    </v-main>

    <!-- #region フッター -->
    <div class="ad tst">
    <adsbygoogle :ad-slot="'6025646828'" :ad-style="{ display: 'block' }" :ad-format="'rectangle'" />
    </div>
    <v-footer color="primary lighten-1" class="p-footer">
      <h2 class="p-footer_logo">
        <moolikeLogowhite />
      </h2>
      <v-row justify="center" no-gutters class="p-footer_btns mb-6">
        <v-col class="p-footer_btns" width="100%">
          <v-btn text rounded class="my-2 p-footer_btns__icon mb-6">
            <NuxtLink class="p-footer_btns__link" to="/newmaterial/">素材一覧</NuxtLink>
          </v-btn>
          <v-btn text rounded class="my-2 p-footer_btns__icon mb-6">
            <NuxtLink class="p-footer_btns__link" to="/ranking/">人気ランキング</NuxtLink>
          </v-btn>
          <v-btn text rounded class="my-2 p-footer_btns__icon mb-6">
            <NuxtLink class="p-footer_btns__link" to="/about/">ABOUT</NuxtLink>
          </v-btn>
        </v-col>
        <v-col class="p-footer_btns" width="100%">
          <v-btn text rounded class="my-2 p-footer_btns__icon mb-6">
            <NuxtLink class="p-footer_btns__link" to="/contact/">リクエスト・お問い合せ</NuxtLink>
          </v-btn>
          <v-btn text rounded class="my-2 p-footer_btns__icon mb-6">
            <NuxtLink class="p-footer_btns__link" to="/guideline/">ガイドライン</NuxtLink>
          </v-btn>
          <v-btn text rounded class="my-2 p-footer_btns__icon mb-6">
            <NuxtLink class="p-footer_btns__link" to="/privacy/">プライバシーポリシー</NuxtLink>
          </v-btn>
        </v-col>
        <v-col class="p-footer_copy" cols="12">
          copyright © moolike all right reserved
        </v-col>
      </v-row>
    </v-footer>
    <!-- #endregion フッター -->

    <!-- #region トップボタン -->
     <transition name="button">
    <div class="p-topBtn" v-show="buttonActive" @click="returnTop">
    <img src="/arrow.png">  
    </div>
    </transition>
    <!-- #endregion トップボタン -->
  </div>
</template>

<script>
  export default {
    data: () => ({
      isHumActive:false,
      search:'',
      model:null,
      buttonActive: false,
      scroll: 0,
      categories: [{
            "id": "youtube",
            "name": "youtube",
          },
          {
            "id": "wedding",
            "name": "結婚式"
          },
          {
            "id": "surprise",
            "name": "サプライズ"
          },
          {
            "id": "business",
            "name": "ビジネス"
          },
        ],
        tags: [{
            tag: '手書き風',
            param: 'handfree'
          },
          {
            tag: 'フィルター',
            param: 'filter'
          },
          {
            tag: '日常',
            param: 'days'
          },
          {
            tag: 'カウントダウン',
            param: 'countdown'
          },
          {
            tag: 'エフェクト',
            param: 'effect'
          },
          {
            tag: 'スタート素材',
            param: 'start'
          },
          {
            tag: '背景',
            param: 'background'
          },
          {
            tag: '人物',
            param: 'people'
          },
          {
            tag: 'おもしろ',
            param: 'interesting'
          },
          {
            tag: 'パロディ',
            param: 'parody'
          },
          {
            tag: '音楽',
            param: 'music'
          },
          {
            tag: 'その他',
            param: 'other'
          }]
    }),
    mounted(){
      window.addEventListener('scroll', this.scrollWindow)
    },
    methods: {
      searchSubmit() {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = "/search/" + this.search;
        a.click();
        a.remove();
      },
      togglemenu() {
        this.isHumActive = !this.isHumActive
      },
      returnTop(){
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
      }, 
      scrollWindow() {
      const top = 100 // ボタンを表示させたい位置
      this.scroll = window.scrollY
      if (top <= this.scroll) {
        this.buttonActive = true
      } else {
        this.buttonActive = false
      }
    }
    }

  }
</script>

