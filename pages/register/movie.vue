<template>
<div class="p-register_wrap">
<div>
    <h2>動画登録</h2>
</div>
  <v-form
   v-on:submit="add"
  >
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="desc"
      :counter="10"
      label="動画説明文"
      required
    ></v-text-field>

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

    <v-text-field
      v-model="category"
      :counter="10"
      label="カテゴリー"
      required
    ></v-text-field>

    <v-text-field
      v-model="tag1"
      :counter="10"
      label="タグ１"
      required
    ></v-text-field>

    <v-text-field
      v-model="tag2"
      :counter="10"
      label="タグ2"
      required
    ></v-text-field>

    <v-text-field
      v-model="tag3"
      :counter="10"
      label="タグ3"
      required
    ></v-text-field>

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
            movie_data:[]
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