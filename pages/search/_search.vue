<template>
  <!-- メインコンテンツ -->
  <div class="p-content">
    <div class="p-content_inner">
      <!-- メインセクション -->
      <div class="p-content_main">
        <!-- パンクず -->
        <div class="p-pankuzu">
          <NuxtLink to="/">moolike</NuxtLink><span> > </span>
          <NuxtLink :to="`/tags/${query}`" class="p-pankuzu_inactive">{{searchttl}}の検索結果</NuxtLink>
        </div>
        <!-- パンクず -->
        <h1 class="p-content_subTtl">ワード検索: {{searchttl}}</h1>
        <div class="p-material">
          <div v-for="(movie) in movie_serach" :key="movie.id" class="p-material_item">
            <v-card class="mx-auto my-12" v-if="movie.desc.includes(searchttl)">
              <div class="p-material_inner p-material_inner--mv">
              <NuxtLink :to="`/detail/${movie.mv_id}`">
                <img :data-src="`/thumb/${movie.mv_id}.webp`"
                  class="p-material_thumb" v-lazy-load>
                         <span class="p-material_new" v-if="today - movie.created.toDate().getTime() <= 24*24*60*60*1000">new</span>
              </NuxtLink>
                </div>
              <div class="p-material_inner">
                <NuxtLink :to="`/detail/${movie.mv_id}`">
                  <div class="p-material_innerWrap">
                    <h3 class="p-material_ttl">{{movie.name}}</h3>
                  </div>
                </NuxtLink>
                <div class="p-material_iconWrap">
                  <!-- ダウンロードリンク -->
                  <v-icon class="p-material_tag_icon" @click="downloadByUrlMp4(movie.mv_id,movie.id,movie.dl_count)">
                    mdi-download</v-icon>
                  <!-- /ダウンロードリンク -->
                </div>
              </div>
            </v-card>
          </div>
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
        searchttl: '',
        page: 1,
        week: 7 * 24 * 60 * 60 * 1000,
        current_page: 1,
        input: '',
        parPage: 15,
        getSearchWord:[],
        today : new Date()
      }
    },
    created: function () {
      let self = this
      this.setQuery()
      this.$store.dispatch('movies/init');
      this.$store.dispatch('movies/getWord').then(querySnapshot => {
        querySnapshot.forEach(doc => {
          self.movie_serach.push(doc.data());
        });
      })
      this.setWords();
    },
    methods: {
      remove(id) {
        this.$store.dispatch('movies/remove', id)
      },
      setQuery() {
        this.query = this.$route.params.search || ''
      },
      setWords() {
            this.searchttl = this.query
      },
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
        this.current_page = 1
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
