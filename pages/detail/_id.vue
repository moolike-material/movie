<template>
  <div class="p-content">
    <div class="p-content_inner">
      <!-- メインセクション -->
      <div class="p-content_main">
        <!-- パンクず -->
        <div class="p-pankuzu">
          <NuxtLink to="/">moolike</NuxtLink><span> > </span>
          <NuxtLink to="/newmaterial/" class="p-pankuzu_inactive">素材一覧</NuxtLink><span> > </span>
          <NuxtLink to="/newmaterial/" class="p-pankuzu_inactive">{{name}}</NuxtLink>
        </div>
        <!-- パンクず -->
        <div class="p-material_detail">
          <div class="p-material_detail__youtube">
            <div class="youtube">
              <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${yt_id}`" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
            <div class="p-material_detail__dl">
              <div class="p-material_detail__dl__item p-material_detail__dl__item--mp4" @click="downloadMp4()">
                MP4形式でダウンロード</div>
              <div class="p-material_detail__dl__item p-material_detail__dl__item--mov" @click="downloadMov()">
                MOV形式でダウンロード</div>
            </div>
          </div>
          <div class="p-material_detail__desc">
            <h2 class="p-material_detail__ttl">{{name}}</h2>
            <p class="p-material_detail__copy">{{desc}}</p>
            <div class="p-material_detail__desc_params">
              <div class="p-material_detail__desc_params__item">再生時間 : {{length}}</div>
              <div class="p-material_detail__desc_params__item">画面サイズ : 1920×1080</div>
              <div class="p-material_detail__desc_params__item">フレームレート : 29.97fps</div>
            </div>
            <div class="p-material_detail__desc_tags">
              <v-chip class="ma-2" color="pink p-category" label text-color="white">
                <NuxtLink :to="`/category/${category}/`">
                  <v-icon left>
                    mdi-folder-multiple-outline
                  </v-icon>
                  {{category}}
                </NuxtLink>
              </v-chip>
            </div>
            <div class="p-material_detail__desc_tags">
              <v-chip class="ma-2" color="pink p-tag" label text-color="white">
                <NuxtLink :to="`/tags/${tag1}/`">
                  <v-icon left>
                    mdi-label
                  </v-icon>
                  {{tag1}}
                </NuxtLink>
              </v-chip>
              <v-chip class="ma-2" color="pink p-tag" label text-color="white">
                <NuxtLink :to="`/tags/${tag2}/`">
                  <v-icon left>
                    mdi-label
                  </v-icon>
                  {{tag2}}
                </NuxtLink>
              </v-chip>
              <v-chip class="ma-2" color="pink p-tag" label text-color="white">
                <NuxtLink :to="`/tags/${tag3}/`">
                  <v-icon left>
                    mdi-label
                  </v-icon>
                  {{tag3}}
                </NuxtLink>
              </v-chip>
            </div>
          </div>
        </div>
        <div class="p-material_wrap p-material_wrap--detail">
            <h2 class="p-material_wrap--detail__ttl">最近人気の素材</h2>
          <topMaterialRank />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        id: '',
        name: '',
        desc: '',
        yt_id: '',
        mv_id: '',
        length: '',
        category: '',
        tag1: '',
        tag2: '',
        tag3: '',
        tag1name: '',
        tag2name: '',
        tag3name: '',
        movie_data: [],
        query: '',
        count: '',
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
            tag: 'v-log',
            param: 'v-log'
          },
          {
            tag: 'サプライズ',
            param: 'surprise'
          },
          {
            tag: '結婚式',
            param: 'wedding'
          },
        ],
      }
    },
    created: function () {
      let self = this
      this.setQuery()
      this.$store.dispatch('movies/init');
      this.$store.dispatch('movies/getDetail', this.query).then(querySnapshot => {
        querySnapshot.forEach(doc => {
        let data = doc.data();
        self.name = data.name
        self.desc = data.desc
        self.yt_id = data.yt_id
        self.mv_id = data.mv_id
        self.length = data.length
        self.category = data.category
        self.tag1 = data.tag1
        self.tag2 = data.tag2
        self.tag3 = data.tag3
        self.id = doc.id
        self.count = data.dl_count
        })
      })
    },
    methods: {
      remove(id) {
        this.$store.dispatch('movies/remove', id)
      },
      setQuery() {
        this.query = this.$route.params.id || ''
      },
      downloadMp4() {
        let mvcount = this.count + 1;
        let mvarr = [this.id, mvcount]
        this.$store.dispatch('movies/dlcount', mvarr)
        let mp4 = this.mv_id + '.mp4';
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
            aDL.download = `${this.mv_id}.mp4`;
            console.log(aDL);
            aDL.click();
          }
          xhr.open('GET', url);
          xhr.send();
        });
      },
      downloadMov() {
        let mvcount = this.count + 1;
        let mvarr = [this.id, mvcount]
        this.$store.dispatch('movies/dlcount', mvarr)
        let movlef = this.mv_id + '.mov';
        console.log(movlef)
        this.$store.dispatch('movies/downloadMov',movlef).then(url => {
          let xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = event => {
            // blobがファイルのデータです
            let blob = xhr.response;
            // aタグをつくります※この辺は自由にアプリに合わせてください
            let aDL = document.createElement('a');
            // ファイルデータに紐づくダウンロードリンクを設定します
            aDL.href = URL.createObjectURL(blob);
            aDL.download = `${this.mv_id}.mov`;
            console.log(aDL);
            aDL.click();
          }
          xhr.open('GET', url);
          xhr.send();
        });
      },
    },
    computed: {
      movies() {
        return this.$store.state.movies.movies
      }
    },
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


  .youtube {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
  }

  .youtube iframe {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  
  .p-material_wrap--detail{
      margin-top: 5rem;
  }
  .p-material_wrap--detaol__ttl{
      margin-top: 8rem;
  }
</style>
