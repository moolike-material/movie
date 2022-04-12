<template>
  <!-- メインコンテンツ -->
  <div class="p-content">
    <div class="p-content_inner">
      <!-- メインセクション -->
      <div class="p-content_main">
        <!-- パンクず -->
        <div class="p-pankuzu">
          <NuxtLink to="/">moolike</NuxtLink><span>  > </span>
          <NuxtLink to="/ranking" class="p-pankuzu_inactive">人気ランキング</NuxtLink>
        </div>
        <!-- パンクず -->
        <h1 class="p-content_subTtl">人気ランキング</h1>
        
        <transition-group appear tag="div" class="p-material">
          <div v-for="(movie,index) in getMovies" :key="movie.mv_id" class="p-material_item">
            <v-card class="mx-auto my-12">
              <div class="p-material_inner p-material_inner--mv">
              <NuxtLink :to="`/detail/${movie.mv_id}`">
                         <span class="p-material_new"
                      v-if="today - movie.created.toDate().getTime() <= 10*24*60*60*1000">new</span>
                <img :src="`/thumb/${movie.mv_id}.webp`"
                  class="p-material_thumb" v-lazy-load>
                <div class="p-rank_color" v-if="index == 0">
                  <div class="p-rank_icon p-rank_icon--1">
                    <v-icon class="p-rank_icon_icon">
                      mdi-crown
                    </v-icon>
                    {{index+1}}
                  </div>
                </div>
                <div class="p-rank_color" v-if="index == 1">
                  <div class="p-rank_icon p-rank_icon--2">
                    <v-icon class="p-rank_icon_icon">
                      mdi-crown
                    </v-icon>
                    {{index+1}}
                  </div>
                </div>
                <div class="p-rank_color" v-if="index == 2">
                  <div class="p-rank_icon p-rank_icon--3">
                    <v-icon class="p-rank_icon_icon">
                      mdi-crown
                    </v-icon>
                    {{index+1}}
                  </div>
                </div>
                <div class="p-rank_color" v-if="index > 2">
                  <div class="p-rank_icon p-rank_icon--4">
                    {{index+1}}
                  </div>
                </div>
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
      </div>
              <!-- サイドバー -->
        <aside class="p-sideber">
          <sidebar />
        </aside>
    </div>
                 <div class="p-more_btn u-mT4">
            　<NuxtLink to="/" class="p-more_btn__link">
              トップに戻る　
            </NuxtLink>
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
      }
    },
    computed: {
      movies() {
        // return this.$store.state.movies.movies
        return this.$store.getters['movies/rankMovies']
      },
      getMovies() {
        let current = this.current_page * this.parPage;
        let start = current - this.parPage;
        return this.movies.slice(0, 18)
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
