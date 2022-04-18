<template>
  <!-- <transition-group appear tag="div" class="p-material"> -->
    <div class="p-material p-material--new">
      <v-slide-group show-arrows>
    <v-slide-item v-for="movie in limitCount" :key="movie.mv_id">
      <v-card class="p-material_item p-material_item--new mx-auto my-12" max-width="230" min-width="150">
        <div class="p-material_inner p-material_inner--mv">
        <NuxtLink :to="`/detail/${movie.mv_id}/`" class="p-link">
        <span class="p-material_new" v-if="today - movie.created.toDate().getTime() <= 10*24*60*60*1000"> new</span>
        <img :data-src="`/thumb/${movie.mv_id}.webp`"
          class="p-material_thumb" v-lazy-load>
        </NuxtLink>
        </div>
        <div class="p-material_inner">
          <NuxtLink :to="`/detail/${movie.mv_id}`" class="p-link">
          <div class="p-material_innerWrap">
            <h3 class="p-material_ttl">{{movie.name}}</h3>
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
    </v-slide-item>
      </v-slide-group>
</div>
  <!-- </transition-group> -->
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
        movie_data: [],
        page: 1,
        today: '',
        week: 7 * 24 * 60 * 60 * 1000,
        movieHref:[]
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
        downloadByUrlMp4(url,id,count) {
          let mvcount = count+1;
          let mvarr = [id,mvcount]
            this.$store.dispatch('movies/dlcount',mvarr)
            const link = document.createElement('a')
            link.download = `${url}.mp4`
            link.href = `/dl/mp4/${url}_mp4.zip`
            link.click()
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
      getThumb(mv_id){
         this.$store.dispatch('movies/getThumb', mv_id).then(url=>{
           return url
         });
      }
    },
    computed: {
      movies() {
        // return this.$store.state.movies.movies
       return this.$store.getters['movies/orderdMovies']
      },
      limitCount(){
        return this.movies.slice(0,10)
      }
    }
  } 

</script>

<style scoped>
.v-slide-group__next, .v-slide-group__prev{
  min-width: 12px;
}

.p-material_item--new{
  margin-left: .5rem!important;
  margin-right: .5rem!important;
}

</style>
