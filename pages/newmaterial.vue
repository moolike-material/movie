<template>
  <!-- メインコンテンツ -->
  <div class="p-content">
    <div class="p-content_inner">
      <!-- メインセクション -->
      <div class="p-content_main">
        <!-- パンクず -->
        <div class="p-pankuzu">
          <NuxtLink to="/">moolike</NuxtLink><span>  > </span>
          <NuxtLink to="/newmaterial" class="p-pankuzu_inactive">新着素材</NuxtLink>
        </div>
        <!-- パンクず -->
        <h1 class="p-content_subTtl">新着素材</h1>
        <transition-group appear tag="div" class="p-material">
          <div v-for="movie in getMovies" :key="movie.mv_id" class="p-material_item">
            <v-card class="mx-auto my-12">
              <div class="p-material_inner p-material_inner--mv">
              <NuxtLink :to="`/detail/${movie.mv_id}`">
                         <span class="p-material_new"
                      v-if="today - movie.created.toDate().getTime() <= 10*24*60*60*1000">new</span>
                <img :src="`/thumb/${movie.mv_id}.webp`"
                  class="p-material_thumb" v-lazy-load>
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
                  <v-icon class="p-material_tag_icon" @click="download(movie.mv_id,movie.id,movie.dl_count)">
                    mdi-download</v-icon>
                  <!-- /ダウンロードリンク -->
                </div>
              </div>
            </v-card>
          </div>
        </transition-group>
             <div class="text-center" @click="returnTop">
    <v-pagination
      v-model="current_page"
      :length="getPageCount"
      class="p-page"
      circle
    ></v-pagination>
                     <div class="p-more_btn u-mT4">
            　<NuxtLink to="/" class="p-more_btn__link">
              トップに戻る　
            </NuxtLink>
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
        created: '',
        dl_count: '',
        movie_data: [],
        page: 1,
        today: '',
        week: 7 * 24 * 60 * 60 * 1000,
        update_array: [],
        current_page: 1,
        input: '',
        parPage: 12,
      }
    },
    created: function () {
      this.$store.dispatch('movies/init');
      let date = new Date();
      this.today = date.getTime();

    },
    methods: {
      remove(id) {
        this.$store.dispatch('movies/remove', id)
      },
      download(mv_id, id, count) {
        let mvcount = count + 1;
        let mvarr = [id, mvcount]
        this.$store.dispatch('movies/dlcount', mvarr)
        let mp4 = mv_id + '_mp4.zip';
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
            aDL.download = `${mv_id}_mp4.zip`;
            aDL.click();
          }
          xhr.open('GET', url);
          xhr.send();
        });
      },
      returnTop(){
        window.scrollTo({
        top:0,
        behavior:'smooth'
        })
      }, 
    },
    computed: {
      movies() {
        // return this.$store.state.movies.movies
        return this.$store.getters['movies/orderdMovies']
      },
      getMovies() {
        let current = this.current_page * this.parPage;
        let start = current - this.parPage;
        return this.movies.slice(start, current)
      },
      getPageCount() {
        return Math.ceil(this.movies.length / this.parPage)
      }
    },
    watch: {
      search() {
        this.current_page = 1
      }
    }
  }

</script>
