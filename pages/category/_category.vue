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
        <h1 class="p-content_subTtl">カテゴリ検索: {{categoryttl}}</h1>
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
                  <a :href="`/mp4/${movie.mv_id}_mp4.zip`" download :onclick="`gtag('event', 'Click', {'event_category': 'download', 'event_label': '${movie.mv_id}', 'value': '0'});`">
                  <v-icon class="p-material_tag_icon">
                    mdi-download</v-icon>
                  </a>
                </div>
              </div>
            </v-card>
          </div>
        </transition-group>
        <div class="text-center" @click="returnTop">
          <v-pagination v-model="current_page" :length="getPageCount" class="p-page" circle></v-pagination>
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
        parPage: 18,
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
      this.$store.dispatch('movies/getCategory', this.query).then(querySnapshot => {
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
