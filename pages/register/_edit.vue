<template>
<div class="p-register_wrap">
<div>
    <h2>素材編集</h2>
</div>
  <v-form
   v-on:submit.prevent="add"
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