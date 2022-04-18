<template>
<div class="p-register_wrap">
<div>
    <h2 class="p-content_subTtl p-content_subTtl--underline">動画登録</h2>
</div>
  <v-form
   v-on:submit="add"
   class="c-register_form">
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>

    <v-textarea
      v-model="desc"
      label="動画説明文"
      required
      rows="7"
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
        label="パロディ"
        value="parody"
      ></v-radio>
      <v-radio
        label="ミュージック"
        value="music"
      ></v-radio>
      <v-radio
        label="おもしろ"
        value="interesting"
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
      v-on:click.prevent="add"
    >
      登録する
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
            items:["youtube","wedding","surprice","business"]
        }
    },
    created: function() {
      this.$store.dispatch('movies/init')
    },
    methods:{
        add(){
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

            //登録処理実行
            this.$store.dispatch('movies/add',this.movie_data);

            //フォーム初期化
            this.name ="";
            this.desc="";
            this.yt_id="";
            this.mv_id="";
            this.length="";
            this.category="";
            this.tag1="";
            this.tag2="";
            this.tag3="";
        },
        remove(id){
            this.$store.dispatch('movies/remove',id)
        }  
    },
    computed:{
        movies(){
            return this.$store.state.movies.movies
        }
    }
  }
</script>

<style>
.c-primary_btn{
    background-color: #1867c0 !important;
    margin-top: 1rem;
    margin-right: 1rem!important;
    text-align: right;
    display:inline-block;
}

.c-register_form .c-btn{
    color: #000!important;
    border: 1px solid #000;
    background-color: #fff!important;
    background: #fff!important;
}

.c-register_form{
  padding:1em!important;
  margin-bottom:5rem
}

.c-register_form .v-text-field__slot{
  margin-top:1.5rem;
  width:60%

}
.c-register_form .v-label{
  padding-left:1rem;
}

.c-register_form input{
  border-bottom: 1px solid #000;
  font-size:1rem;
  padding:1rem;
  display:block!important;
}

.c-register_form .col{
  margin-top:1rem;

}

</style>