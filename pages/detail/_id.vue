<template>
  <div class="p-content">
    <div class="p-content_inner">
      <!-- メインセクション -->
      <div class="p-content_main">
        <!-- パンクず -->
        <div class="p-pankuzu">
          <NuxtLink to="/">moolike</NuxtLink><span> > </span>
          <NuxtLink to="/newmaterial/" class="p-pankuzu">素材一覧</NuxtLink><span> > </span>
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
            <span style="font-size:0.8rem; margin-bottom:2rem" class="p-attention_id">
            ※mp4データでは背景を透過させるために、グリーンバックで用意しています。<br><br>
            ※movデータはダウンロードに時間がかかる場合がございます。（ボタンクリック後最大30秒程度）<br>
              </span>
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
                  {{tag1name}}
                </NuxtLink>
              </v-chip>
              <v-chip class="ma-2" color="pink p-tag" label text-color="white">
                <NuxtLink :to="`/tags/${tag2}/`">
                  <v-icon left>
                    mdi-label
                  </v-icon>
                  {{tag2name}}
                </NuxtLink>
              </v-chip>
              <v-chip class="ma-2" color="pink p-tag" label text-color="white">
                <NuxtLink :to="`/tags/${tag3}/`">
                  <v-icon left>
                    mdi-label
                  </v-icon>
                  {{tag3name}}
                </NuxtLink>
              </v-chip>
            </div>
          </div>
        </div>
        <div class="p-material_wrap2 u-mT2">
          <h2 class="page__subttl u-blk u-txtC">動画素材の使用について</h2>
          <ol class="page__orderlist page__orderlist--id">
            <li class="page__item">個人利用・商用利用どちらにおいても使用いただけます。</li>
            <li class="page__item">利用に関して許可、報告、クレジットの表記は必要ありません。</li>
            <li class="page__item">素材に関しては自由に編集し使用してください。</li>
            <li class="page__item">著作権は放棄しておりません。動画そのものを素材として再配布することは禁止します。</li>
            <li class="page__item">質問等ございましたら<NuxtLink to="/contact/">お問い合せフォーム</NuxtLink>よりご連絡をお願いします。</li>
          </ol>
        </div>
        <!--div class="p-material_wrap p-material_wrap--detail">
            <h2 class="p-content_section__ttl">人気のタグ特集</h2>
              <div class="p-bnr__register">
                <NuxtLink to="/tags/countdown" class="p-bnr_item">
                  <p class="p-bnr_copy">カウントダウン</p>
                  <img src="/tag_countdown.webp" alt="おすすめタグ　カウントダウン" class="p-bnr_img">
                </NuxtLink>
                <NuxtLink to="/tags/background" class="p-bnr_item">
                  <p class="p-bnr_copy">背景</p>
                  <img src="/tag_background.webp" alt="おすすめタグ　背景" class="p-bnr_img">
                </NuxtLink>
                <NuxtLink to="/tags/filter" class="p-bnr_item">
                  <p class="p-bnr_copy">フィルター</p>
                  <img src="/tag_filter.webp" alt="おすすめタグ　フィルター" class="p-bnr_img">
                </NuxtLink>
                <NuxtLink to="/tags/handfree" class="p-bnr_item">
                  <p class="p-bnr_copy">手書き風</p>
                  <img src="/tag_handfree.webp" alt="おすすめタグ　手書き風" class="p-bnr_img">
                </NuxtLink>
              </div>
        </div-->
        <div class="p-material_wrap p-material_wrap--detail">
          <h2 class="p-content_section__ttl">最近人気の素材</h2>
          <topMaterialRank />
        </div>
      </div>
    </div>
    <div class="p-more_btn u-mT2">
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
          self.tag1 = data.tag1
          self.tag2 = data.tag2
          self.tag3 = data.tag3
          self.id = doc.id
          self.count = data.dl_count
          self.category = data.category
          if(data.category == "youtube"){
            self.category == "youtube"
          }else if(data.category == "wedding"){
            self.category == "結婚式"
          }else if(data.category == "smartphone"){
            self.category == "スマホサイズ"
          }else if(data.category == "business"){
            self.category == "ビジネス"
          }else{
            self.category == "その他"
          }
          if(self.tag1 == "handfree"){
            this.tag1name = "手書き風"
          }else if(self.tag1 == "wedding"){
            this.tag1name = "結婚式"
          }else if(self.tag1 == "days"){
            this.tag1name = "日常"
          }else if(self.tag1 == "v-log"){
            this.tag1name = "v-log"
          }else if(self.tag1 == "surprise"){
            this.tag1name = "サプライズ"
          }else if(self.tag1 == "countdown"){
            this.tag1name = "カウントダウン"
          }else{
            this.tag1name = "その他"
          }
          if(this.tag2 == "handfree"){
            this.tag2name = "手書き風"
          }else if(this.tag2 == "wedding"){
            this.tag2name = "結婚式"
          }else if(this.tag2 == "days"){
            this.tag2name = "日常"
          }else if(this.tag2 == "v-log"){
            this.tag2name = "v-log"
          }else if(this.tag2 == "surprise"){
            this.tag2name = "サプライズ"
          }else if(this.tag2 == "countdown"){
            this.tag2name = "カウントダウン"
          }else{
            this.tag2name = "その他"
          }
          if(this.tag3 == "handfree"){
            this.tag3name = "手書き風"
          }else if(this.tag3 == "wedding"){
            this.tag3name = "結婚式"
          }else if(this.tag3 == "days"){
            this.tag3name = "日常"
          }else if(this.tag3 == "v-log"){
            this.tag3name = "v-log"
          }else if(this.tag3 == "surprise"){
            this.tag3name = "サプライズ"
          }else if(this.tag3 == "countdown"){
            this.tag3name = "カウントダウン"
          }else{
            this.tag3name = "その他"
          }
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
        let mp4 = this.mv_id + '_mp4.zip';
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
            aDL.download = `${this.mv_id}_mp4.zip`;
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
        let movlef = this.mv_id + '_mov.zip';
        console.log(movlef)
        this.$store.dispatch('movies/downloadMov', movlef).then(url => {
          let xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = event => {
            // blobがファイルのデータです
            let blob = xhr.response;
            // aタグをつくります※この辺は自由にアプリに合わせてください
            let aDL = document.createElement('a');
            // ファイルデータに紐づくダウンロードリンクを設定します
            aDL.href = URL.createObjectURL(blob);
            aDL.download = `${this.mv_id}_mov.zip`;
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
      },
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
    border: 2px solid #ccc;
  }

  .youtube iframe {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .p-material_wrap--detail {
    margin-top: 5rem;
  }

  .p-material_wrap--detaol__ttl {
    margin-top: 8rem;
  }

  .p-content_main {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .p-bnr__register {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .p-bnr__register .p-bnr_item {
    margin: .5rem;
    width: 45%;
    height: 130px;
    min-width: 45% !important;
  }

  .p-bnr__register .p-bnr_copy {
    top: 50%;
  }

  .p-attention_id {
    display: block;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .page__orderlist {
    margin-top: 2rem;
  }

</style>

<styele scoped>
.page__orderlist--id{
  padding-left:0;
}
</style>
