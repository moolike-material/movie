<template>
  <div class="p-top">
    <!-- メインビジュアル -->
    <div class="p-mainvisual--2">
              <carousel />
    </div>
    <!-- メインコンテンツ -->
    <div class="p-content">
      <div class="p-content_inner">
        <!-- メインセクション -->
        <div class="p-content_main">
          <div class="p-content_icon">
            <div class="p-content_icon__item">
              <NuxtLink to="/tags/effect" class="">
                <img src="/icon_effect.png" alt="エフェクト">
              </NuxtLink>
            </div>
            <div class="p-content_icon__item">
              <NuxtLink to="/category/wedding" class="">
                <img src="/icon_wedding.png" alt="結婚式">
              </NuxtLink>
            </div>
            <div class="p-content_icon__item">
              <NuxtLink to="/tags/filter" class="">
                <img src="/icon_filter.png" alt="フィルター">
              </NuxtLink>
            </div>
            <div class="p-content_icon__item">
              <NuxtLink to="/category/handfree" class="">
                <img src="/icon_handfree.png" alt="手書き風">
              </NuxtLink>
            </div>
          </div>
          <section class="p-content_section p-content_section--top">
            <h2 class="p-content_section__ttl">最近人気の動画素材
            </h2>
            <!-- 素材一覧 -->
            <div class="p-material_wrap">
              <topMaterialRank />
            </div>
            <!-- /素材一覧 -->
            <div class="p-more_btn">
            　<NuxtLink to="ranking" class="p-more_btn__link">
              人気素材一覧をみる　　
            </NuxtLink>
            </div>
          </section>
          <section class="p-content_section">
            <h2 class="p-content_section__ttl">最近追加された動画素材</h2>
            <!-- 素材一覧 -->
            <div class="p-material_wrap">
              <topMaterialNew />
            </div>
            <!-- /素材一覧 -->
            <div class="p-more_btn">
            　<NuxtLink to="newmaterial" class="p-more_btn__link">
              新着素材一覧をみる　　
            </NuxtLink>
            </div>
          </section>
          <!-- おすすめポイント -->
          <section class="p-content_section">
            <h2 class="p-content_section__ttl">moolike おすすめポイント</h2>
          <ul class="p-reccomend">
            <li class="p-reccomend__item">
              <img src="/point1.png" class="p-reccomend__img" v-lazy-load>
              <div class="p-reccomend__Inner">
              <h3 class="p-reccomend__ttl">著作権フリーの動画素材</h3>
              <p class="p-reccomend__desc">moolikeの素材は全て著作権フリーです!<br>さらに商用利用OK!</p>
              </div>
            </li>
            <li class="p-reccomend__item">
              <img src="/point2.png" class="p-reccomend__img" v-lazy-load>
              <div class="p-reccomend__Inner">
              <h3 class="p-reccomend__ttl">ダウンロードしてすぐに使える！</h3>
              <p class="p-reccomend__desc">動画素材はすぐに使えるように<br>MP4,MOV形式でご用意しています。</p>
              </div>
            </li>
            <li class="p-reccomend__item">
              <img src="/point3.png" class="p-reccomend__img" v-lazy-load>
              <div class="p-reccomend__Inner">
              <h3 class="p-reccomend__ttl">個別制作依頼も対応！</h3>
              <p class="p-reccomend__desc">結婚式ムービー、youtube編集などの<br>個別依頼も受け付けています！</p>
              </div>
            </li>
          </ul>
          </section>
          <!-- 新着情報・ブログ -->
          <section class="p-content_section">
            <h2 class="p-content_section__ttl">新着情報・ブログ</h2>
            <div class="p-content_section--column">
            <ul class="p-column">
              <li class="p-column__item">
                <NuxtLink to="/column/page1/" class="p-column__item">
                  <img src="/column/01/mv.webp" class="p-column__img">
                  <div class="p-column__inner">
                  <span class="u-inblk p-column__icon">新着情報</span>
                    <h3 class="p-column__ttl">mp4とmovって何？動画素材を使うために知っておきたい事！</h3>
                    <p class="p-column__desc">今回はなぜmp4とmov形式の違いについてご紹介します。</p>
                    <span class="u-inblk p-column__date">2022.5.6</span>
                  </div>
                </NuxtLink>
              </li>
            </ul>
            </div>
          </section>
          <section class="p-content_section">
            <h2 class="p-content_section__ttl">よくある質問
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
    items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
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
            question: '動画形式は何がありますか？',
            answer: 'mp4,mov形式ファイルでご用意しています。それぞれお持ちの編集ソフトに適した動画形式でダウンロードしてください。'
          },
          {
            question: '商用利用は可能ですか？',
            answer: 'はい、可能です。しかし、当webサイトでダウンロードした動画素材をそのまま動画素材として配布することは禁止しています。'
          },
          {
            question: '使用許可・クレジット表記は必要ですか？',
            answer: '基本必要ありません。お気軽にダウンロードをしてください。'
          },
          {
            question: 'youtubeなどSNSで使用しても良いですか？',
            answer: '動画素材として配布する目的ではなく、動画コンテンツの一環として使用していただくのはOKです。'
          }
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

</style>
