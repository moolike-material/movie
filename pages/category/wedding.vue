<template>
  <!-- メインコンテンツ -->
  <div class="p-content">
    <div class="p-content_inner">
      <!-- メインセクション -->
      <div class="p-content_main">
        <!-- パンクず -->
        <div class="p-pankuzu">
          <NuxtLink to="/">moolike</NuxtLink><span> > </span>
          <NuxtLink :to="`/category/${query}/`" class="p-pankuzu_inactive">{{categoryttl}}</NuxtLink>
        </div>
        <!-- パンクず -->
        <h1 class="p-content_subTtl p-content_subTtl--special">結婚式で使える素材</h1>
        <img src="/wedding.jpg" class="p-special__mv">
        <p class="p-special__copy">
        結婚式で使いやすい無料動画素材です♪<br>
        プロフィールムービーやオープニングムービーで<br>
        使いやすい素材を取り揃えました！</p>
        <section class="p-special__materialWrap">
        <h2 class="p-content_section__ttl">結婚式で使える素材一覧</h2>
        <transition-group appear tag="div" class="p-material">
          <div v-for="movie in getMovies" :key="movie.mv_id" class="p-material p-material_item">
            <v-card class="mx-auto my-12">
              <div class="p-material_inner p-material_inner--mv">
              <NuxtLink :to="`/detail/${movie.mv_id}`">
                <img :src="`/thumb/${movie.mv_id}.webp`"
                  class="p-material_thumb" v-lazy-load>
                         <span class="p-material_new" v-if="today - movie.created.toDate().getTime() <= 24*24*60*60*1000">new</span>
              </NuxtLink>
                </div>
              <div class="p-material_inner">
                <NuxtLink :to="`/detail/${movie.mv_id}`">
                  <div class="p-material_innerWrap">
                    <h3 class="p-material_ttl">{{movie.name}}{{movie.if}}</h3>
                  </div>
                </NuxtLink>
                <div class="p-material_iconWrap">
                  <!-- ダウンロードリンク -->
                  <v-icon class="p-material_tag_icon" @click="download(movie.mv_id,movie.id,movie.dl_count)">
                    mdi-download</v-icon>
                  <!-- /ダウンロードリンク -->
                </div>
              </div>
            </v-card>
          </div>
        </transition-group>
        <div class="text-center" @click="returnTop">
          <v-pagination v-model="current_page" :length="getPageCount" class="p-page" circle></v-pagination>
        </div>
        </section>

        <section class="p-special__materialWrap">
        <h2 class="p-content_section__ttl u-mB2">無料素材特集</h2>
            <div class="p-bnr__register">
                <NuxtLink to="/category/wedding" class="p-bnr_item">
                    <img src="/wedding.webp" alt="おすすめタグ　カウントダウン" class="p-bnr_img">
                    <p class="p-bnr_ttl">結婚式で使える動画素材</p>
                    <p class="p-bnr_copy">プロフィールムービーやオープニングムービーで使いやすい素材を取り揃えました！</p>
                </NuxtLink>
                <NuxtLink to="/category/countdown" class="p-bnr_item">
                    <img src="/countdown.webp" alt="おすすめタグ　カウントダウン" class="p-bnr_img">
                    <p class="p-bnr_ttl">カウントダウンの無料素材</p>
                    <p class="p-bnr_copy">動画のスタートを個性豊かに演出できるカウントダウンのフリー素材です♪</p>
                </NuxtLink>
                <NuxtLink to="/category/handfree" class="p-bnr_item">
                    <img src="/handfree.webp" alt="おすすめタグ　手書き風" class="p-bnr_img">
                    <p class="p-bnr_ttl">手書き風の無料素材</p>
                    <p class="p-bnr_copy">まるでイラストが描かれるかのように表示されるフリー素材を集めました♪ 温かさをプラスした動画演出に最適です！</p>
                </NuxtLink>
            </div>
        </section>
        <div class="p-more_btn u-mT6">
        　<NuxtLink to="/" class="p-more_btn__link">
        トップに戻る　
        </NuxtLink>
        </div>
      </div>
      <!-- サイドバー -->
      <aside class="p-sideber">
        <sidebar />
      </aside>
    </div>
  </div>
</template>

<script>
  export default {
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
        movie_serach: [],
        query: '',
        categoryttl: '',
        page: 1,
        week: 7 * 24 * 60 * 60 * 1000,
        current_page: 1,
        input: '',
        today : new Date(),
        parPage: 12,
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
        ],
             categories: [{
            "id": "youtube",
            "name": "youtube",
          },
          {
            "id": "wedding",
            "name": "結婚式"
          },
          {
            "id": "smartphone",
            "name": "スマホサイズ"
          },
          {
            "id": "business",
            "name": "ビジネス"
          },
        ],    
      }
    },
    created: function () {
      let self = this
      this.setQuery()
      this.$store.dispatch('movies/init');
      this.$store.dispatch('movies/getCategory', "wedding").then(querySnapshot => {
        querySnapshot.forEach(doc => {
          self.movie_serach.push(doc.data());
        });
      })
      this.setCategories();
    },
    methods: {
      returnTop(){
        window.scrollTo({
        top:0,
        behavior:'smooth'
        })
      },
      remove(id) {
        this.$store.dispatch('movies/remove', id)
      },
      setQuery() {
        this.query = this.$route.params.category || ''
      },
      setCategories() {
        this.categories.forEach((category) => {
          if (category.id == this.query) {
            this.categoryttl = category.name
          }
        })
      },
      download(mv_id, id, count) {
        let mp4 = mv_id + '.mp4';
        this.$store.dispatch('movies/download', mp4).then(url => {
          const xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = event => {
            // blobがファイルのデータです
            const blob = xhr.response;
            // aタグをつくります※この辺は自由にアプリに合わせてください
            const aDL = document.createElement('a');
            // ファイルデータに紐づくダウンロードリンクを設定します
            aDL.href = URL.createObjectURL(blob);
            aDL.download = `${mv_id}.mp4`;
            aDL.click();
          }
          xhr.open('GET', url);
          xhr.send();
        });
      }
    },
    computed: {
      movies() {
        return this.$store.state.movies.movies;
      },
      limitCount() {
        return this.movie_serach.slice(0, 3)
      },
       getMovies() {
        let current = this.current_page * this.parPage;
        let start = current - this.parPage;
        return this.movie_serach.slice(start, current)
      },      
      getPageCount() {
        return Math.ceil(this.movie_serach.length / this.parPage)
      }
    },
    watch: {
      search() {
        this.page = 1
      }
    }
  }

</script>

<style>
  .c-primary_btn {
    background-color: #1867c0 !important;
    margin-top: 1rem;
    margin-right: 2rem;
    text-align: right;
  }

  .c-btn {
    color: #000 !important;
    border: 1px solid #000;
    background-color: #fff !important;
    background: #fff !important;
  }

</style>
