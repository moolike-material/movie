<template>
<div class="p-register_wrap">
<div>
    <h2 class="p-content_subTtl p-content_subTtl--underline">素材編集</h2>
</div>
  <v-form
   v-on:submit.prevent="add"
   class="c-register_form"
  >
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>

    <v-textarea
      v-model="desc"
      label="動画説明文"
      rows="7"
      required
    ></v-textarea>

    <v-text-field
      v-model="yt_id"
      :counter="10"
      label="youtube ID"
      required
    ></v-text-field>

    <v-text-field
      v-model="mv_id"
      :counter="10"
      label="movie ID"
      required
    ></v-text-field>

    <v-text-field
      v-model="length"
      :counter="10"
      label="尺"
      required
    ></v-text-field>

       <!-- #region カテゴリ登録処理 -->

   <v-col>
    <h5>カテゴリー</h5>
    <v-radio-group
      v-model="category"
      row
    >
      <v-radio
        label="Youtube"
        value="youtube"
      ></v-radio>
      <v-radio
        label="結婚式"
        value="wedding"
      ></v-radio>
      <v-radio
        label="サプライズ"
        value="surprise"
      ></v-radio>
      <v-radio
        label="ビジネス"
        value="business"
      ></v-radio>
    </v-radio-group>
    </v-col>
   <!-- #endregion カテゴリ登録処理 -->

        <!-- #region タグ登録処理 -->
   <v-col>
    <h5>タグ１</h5>
    <v-radio-group
      v-model="tag1"
      row
    >
      <v-radio
        label="手書き風"
        value="handfree"
      ></v-radio>
      <v-radio
        label="カウントダウン"
        value="countdown"
      ></v-radio>
      <v-radio
        label="フィルター"
        value="filter"
      ></v-radio>
      <v-radio
        label="日常"
        value="days"
      ></v-radio>
      <v-radio
        label="エフェクト"
        value="effect"
      ></v-radio>
      <v-radio
        label="スタート素材"
        value="start"
      ></v-radio>
      <v-radio
        label="背景"
        value="background"
      ></v-radio>
      <v-radio
        label="人物"
        value="people"
      ></v-radio>
      <v-radio
        label="おもしろ"
        value="interesting"
      ></v-radio>
            <v-radio
        label="パロディ"
        value="parody"
      ></v-radio>
      <v-radio
        label="ミュージック"
        value="music"
      ></v-radio>
            <v-radio
        label="その他"
        value="other"
      ></v-radio>
    </v-radio-group>
    </v-col>

   <v-col>
    <h5>タグ2</h5>
    <v-radio-group
      v-model="tag2"
      row
    >
      <v-radio
        label="手書き風"
        value="handfree"
      ></v-radio>
      <v-radio
        label="カウントダウン"
        value="countdown"
      ></v-radio>
      <v-radio
        label="フィルター"
        value="filter"
      ></v-radio>
      <v-radio
        label="日常"
        value="days"
      ></v-radio>
      <v-radio
        label="エフェクト"
        value="effect"
      ></v-radio>
      <v-radio
        label="スタート素材"
        value="start"
      ></v-radio>
      <v-radio
        label="背景"
        value="background"
      ></v-radio>
      <v-radio
        label="人物"
        value="people"
      ></v-radio>
      <v-radio
        label="おもしろ"
        value="interesting"
      ></v-radio>
            <v-radio
        label="パロディ"
        value="parody"
      ></v-radio>
      <v-radio
        label="ミュージック"
        value="music"
      ></v-radio>
            <v-radio
        label="その他"
        value="other"
      ></v-radio>
    </v-radio-group>
    </v-col>

   <v-col>
    <h5>タグ3</h5>
    <v-radio-group
      v-model="tag3"
      row
    >
      <v-radio
        label="手書き風"
        value="handfree"
      ></v-radio>
      <v-radio
        label="カウントダウン"
        value="countdown"
      ></v-radio>
      <v-radio
        label="フィルター"
        value="filter"
      ></v-radio>
      <v-radio
        label="日常"
        value="days"
      ></v-radio>
      <v-radio
        label="エフェクト"
        value="effect"
      ></v-radio>
      <v-radio
        label="スタート素材"
        value="start"
      ></v-radio>
      <v-radio
        label="背景"
        value="background"
      ></v-radio>
      <v-radio
        label="人物"
        value="people"
      ></v-radio>
      <v-radio
        label="おもしろ"
        value="interesting"
      ></v-radio>
            <v-radio
        label="パロディ"
        value="parody"
      ></v-radio>
      <v-radio
        label="ミュージック"
        value="music"
      ></v-radio>
            <v-radio
        label="その他"
        value="other"
      ></v-radio>
    </v-radio-group>
    </v-col>
 <!-- #endregion タグ登録処理 -->

    <v-btn
      color="success"
      class="mr-4 c-primary_btn"
      v-on:click.prevent="update()"
    >
      更新する
    </v-btn>
    <v-btn
      color="success"
      class="mr-4 c-btn"
      link nuxt to="../register"
    >
      一覧ページに戻る
    </v-btn>
  </v-form>
  </div>
</template>

<script>
  export default {
    data:function(){
        return{
            name:'',
            desc:'',
            yt_id:'',
            mv_id:'',
            length:'',
            category:'',
            tag1:'',
            tag2:'',
            tag3:'',
            movie_data:[],
            query:'',
        }
    },
    created: function() {
    let self = this
    this.setQuery()
      this.$store.dispatch('movies/init');
      this.$store.dispatch('movies/get',this.query).then(function(doc){
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
      })
    },
    methods:{
        remove(id){
            this.$store.dispatch('movies/remove',id)
        },
        setQuery() {
            this.query = this.$route.params.edit || ''
        },
        update() {
            //ムービーデータの作成
            this.movie_data.push(this.name);
            this.movie_data.push(this.desc);
            this.movie_data.push(this.yt_id);
            this.movie_data.push(this.mv_id);
            this.movie_data.push(this.length);
            this.movie_data.push(this.category);
            this.movie_data.push(this.tag1);
            this.movie_data.push(this.tag2);
            this.movie_data.push(this.tag3);
            this.movie_data.push(this.query);

            this.$store.dispatch('movies/update', this.movie_data)
            console.log('更新しました')
        }
    },
    computed:{
        movies(){
            return this.$store.state.movies.movies
        }
    },    
  }
</script>

<style>
.c-primary_btn{
    background-color: #1867c0 !important;
    margin-top: 1rem;
    margin-right: 2rem;
    text-align: right;
}

.c-btn{
    color: #000!important;
    border: 1px solid #000;
    background-color: #fff!important;
    background: #fff!important;
}

</style>