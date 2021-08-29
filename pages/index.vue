<template>
  <div class="p-top">
    <!-- メインビジュアル -->
    <div class="p-mainvisual">
      <div class="p-mainvisual_box">
        <p class="p-mainvisual__desc">商用利用可能のフリー動画素材サイトです。<br>”シンプルで使いやすい”を追求した幅広い素材を取り揃えています。</p>
        <div class="p-mainvisual_inner">
          <form @submit.prevent="searchSubmit">
            <v-autocomplete :search-input.sync="search" hide-details label="動画をキーワードで探す" solo class="p-search">
            </v-autocomplete>
          </form>
        </div>
      </div>
    </div>
    <!-- メインバナー -->
    <div class="p-bnr">
      <NuxtLink to="tags/countdown" class="p-bnr_item">
        <p class="p-bnr_copy">カウントダウン</p>
        <img src="tag_countdown.webp" alt="おすすめタグ　カウントダウン" class="p-bnr_img">
      </NuxtLink>
      <NuxtLink to="tags/background" class="p-bnr_item">
        <p class="p-bnr_copy">背景</p>
        <img src="tag_background.webp" alt="おすすめタグ　背景" class="p-bnr_img">
      </NuxtLink>
      <NuxtLink to="tags/filter" class="p-bnr_item">
        <p class="p-bnr_copy">フィルター</p>
        <img src="tag_filter.webp" alt="おすすめタグ　フィルター" class="p-bnr_img">
      </NuxtLink>
      <NuxtLink to="tags/handfree" class="p-bnr_item">
        <p class="p-bnr_copy">手書き風</p>
        <img src="tag_handfree.webp" alt="おすすめタグ　手書き風" class="p-bnr_img">
      </NuxtLink>
    </div>
    <!-- /メインバナー -->
    <!-- メインコンテンツ -->
    <div class="p-content">
      <div class="p-content_inner">
        <!-- メインセクション -->
        <div class="p-content_main">
          <section class="p-content_section">
            <h2 class="p-content_section__ttl">最近人気の素材
              <span class="p-content_section__ttl_line">
                <headingline />
              </span>
            </h2>
            <!-- 素材一覧 -->
            <div class="p-material_wrap">
              <topMaterialRank />
            </div>
            <!-- /素材一覧 -->
            　<NuxtLink to="ranking" class="p-more_btn">
              人気素材一覧をみる❯
            </NuxtLink>
          </section>
          <section class="p-content_section">
            <h2 class="p-content_section__ttl">最近追加された素材
              <span class="p-content_section__ttl_line">
                <headingline />
              </span>
            </h2>
            <!-- 素材一覧 -->
            <div class="p-material_wrap">
              <topMaterialNew />
            </div>
            <!-- /素材一覧 -->
            　<NuxtLink to="newmaterial" class="p-more_btn">
              新着素材一覧をみる❯
            </NuxtLink>
          </section>
          <section class="p-content_section">
            <div class="p-tag_wrap">
              <h2 class="p-content_section__ttl">
                人気のタグ
              </h2>
              <div class="p-content_section_tag">
                <v-chip class="ma-2" color="pink p-tag" label text-color="white" v-for="tag in tags" :key=tag.tag>
                  <NuxtLink :to="`tags/${tag.param}`">
                    <v-icon left>
                      mdi-label
                    </v-icon>
                    {{tag.tag}}
                  </NuxtLink>
                </v-chip>
              </div>
            </div>
          </section>
          <section class="p-content_section">
            <h2 class="p-content_section__ttl">よくある質問
              <span class="p-content_section__ttl_line">
                <headingline />
              </span>
            </h2>
            <v-expansion-panels class="p-faq">
              <v-expansion-panel v-for="faq in faqs" :key=faq.question>
                <v-expansion-panel-header>
                  {{faq.question}}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{faq.answer}}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </section>
        </div>
        <!-- サイドバー -->
        <aside class="p-sideber">
          <sidebar />
        </aside>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
            src: '/mv.jpg',
          },
          {
            src: '/mv3.jpg',
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
            tag: '結婚式',
            param: 'wedding'
          }
        ],
        faqs: [{
            question: 'ダウンロード形式は何がありますか？',
            answer: 'mp4,mov形式ファイルでご用意しています。それぞれお持ちの編集ソフトに適した形式でダウンロードしてください。'
          },
          {
            question: '商用利用は可能ですか？',
            answer: 'はい、可能です。しかし、当webサイトでダウンロードした動画素材をそのまま動画素材として配布することは禁止しています。'
          },
          {
            question: '使用許可は入りますか？',
            answer: '基本必要ありません。お気軽にダウンロードをしてください'
          },
        ],
        search: '',
        model: null
      }
    },
    methods: {
      searchSubmit() {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = "/search/" + this.search;
        a.click();
        a.remove();
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    }
  }

</script>
<style>
  .p-mainvisual {
    position: relative;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    height: 350px;
    background: url(/mv2.webp)no-repeat center -120px;
    background-size: 100%;
    background-attachment: fixed;
  }

  @media screen and (max-width:350px) {
    .p-material_item {
      max-width: 170px !important;
      min-width: 150px;
    }


  }

  @media screen and (min-width:751px) and (max-width:1120px) {
    .p-main_img {
      height: auto !important;
      transform: translateY(0) !important;
    }

    .p-search_header {
      width: 230px !important;
    }

    .p-mainvisual {
      height: 350px;
      background: url(/mv2.webp)no-repeat center -150px;
      background-size: 150%;
      background-attachment: fixed;
    }

    .p-header_ttl {
      margin-right: .5rem;
    }

    .p-nav_link {
      font-size: .6rem;
    }

  }

  @media screen and (max-width:750px) {
    .text-center{
      margin-top: 1rem;
    }

    .p-mainvisual {
      height: 350px;
      background: url(/mv2.webp)no-repeat center 25px;
      background-size: 200%;
      background-attachment: fixed;
    }

    .p-nav_link {
      font-size: .6rem;
    }

    .p-header_ttl {
      margin-right: .5rem;
    }

    .p-mainvisual_inner {
      width: 85% !important;
    }

    .p-content_main {
      width: 96%;
    }

    main {
      width: 100%;
      /* overflow: hidden; */
    }

    .p-material_item {
      max-width: 160px !important;
    }

    .p-material_new {
      font-size: .5rem;
      padding: .08rem .3rem
    }

    .p-content_subTtl {
      font-size: 1.2rem;
    }

    .p-material_tag_icon {
      font-size: 16px !important;
    }

    .p-material_ttl {
      width: 110px;
      overflow: hidden;
      height: 14px;
      font-size: .5rem;
    }

    .p-header_ttl {
      width: 150px;
      margin-right: 2rem;
    }

    .p-sideber {
      display: none !important;
    }

    .p-content_inner {
      /* width: 100vw !important; */
      display: block;
    }

    .p-material {
      justify-content: space-around;
    }

    .p-material_item {
      margin: 1rem 0rem 0rem !important;
    }

    .p-main_img {
      width: 225% !important;
      transform: translateY(0) !important;
    }

    .p-search_header {
      display: none;
    }

    .v-input__slot {
      padding: 0 12px 0 10px !important;
    }

    .p-ham {
      display: block;
    }

    .p-search {
      width: 140vw !important;
    }

    .p-mainvisual__desc {
      font-size: .9rem !important;
      padding: 4rem .5rem 0;
    }

    .p-search_header {
      width: 150px !important;
    }

    .p-footer_btns {
      font-size: .5rem;
    }

    .p-material_detail {
      display: block;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .p-material_detail__youtube {
      width: 100%;
    }

    .p-material_detail__dl {
      margin-bottom: 2rem;
    }

    .p-material_detail__dl__item {
      padding: .7rem .4rem;
      text-align: center;
      font-size: .5rem;
      width: 48%;

    }

    .p-material_detail__desc {
      width: 100%;
    }

    .p-form__message {
      width: 333px;
      padding: .5rem;
    }

  }

  .p-top {
    margin-top: -3rem;
    padding-top: 3rem;
  }


  .p-mainvisual_box {
    position: absolute;
    /* background: rgba(5, 3, 22, 0.4)!important; */
    height: 100%;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 2;

  }


  .p-mainvisual__desc {
    padding-top: 5rem;
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.15rem;
    line-height: 1.75;
    text-shadow: 2px 1px 10px rgb(0,0,0,.4);
  }

  .p-mainvisual_inner {
    width: 40%;
    margin: 2rem auto;
  }

  .p-more_btn {
    display: block;
    text-align: right;
    font-size: .8rem;
    font-weight: bold;
    margin-top: 1rem;
    color: #23abdd !important;
    text-decoration: underline;
  }

  .p-more_btn:hover {
    text-decoration: none;
  }

  .p-tag_wrap {
    background-color: #f2f2f2;
    padding: 1rem;
  }

  .p-content_section_tag {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .p-tag {
    margin-top: 1rem;
    cursor: pointer;
  }

  .p-faq {
    margin-top: 1rem;
  }

  .p-mvWrap {
    height: 350px;
    overflow: hidden;
  }

</style>
