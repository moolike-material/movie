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
        <div class="p-material">
          <v-lazy v-model="isActive" :options="{threshold: .3}" transition="fade-transition"
            v-for="(movie) in getMovies" :key="movie.id">
            <v-card class="p-material_item mx-auto my-12" max-width="250" min-width="150">
              <div class="p-material_inner p-material_inner--mv">
              <NuxtLink :to="`/detail/${movie.id}`">
                         <span class="p-material_new"
                      v-if="today - movie.created.toDate().getTime() <= 24*24*60*60*1000">new</span>
                <img :src="`http://www.moolike-stock.com/wp-content/themes/moolike_wp/thumb/${movie.mv_id}.jpg`"
                  class="p-material_thumb">
              </NuxtLink>
                </div>
              <div class="p-material_inner">
                <NuxtLink :to="`/detail/${movie.id}`">
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
          </v-lazy>
        </div>
             <div class="text-center">
    <v-pagination
      v-model="current_page"
      :length="getPageCount"
      class="p-page"
      circle
    ></v-pagination>
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
        parPage: 15,
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
            console.log(aDL);
            aDL.click();
          }
          xhr.open('GET', url);
          xhr.send();
        });
      }
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
