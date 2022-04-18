<template>
  <div class="p-register_wrap">
    <div>
      <h2 class="p-content_subTtl p-content_subTtl--underline">登録素材一覧</h2>
      <v-btn depressed color="primary" class="c-primary_btn--new" link nuxt to="register/movie">
        新規登録
      </v-btn>
      <!-- 確認登録 -->
      <div>
        <v-card class="mx-auto">
          <v-simple-table>
            <template v-slot:default>
              <thead class="thead-bg">
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    description
                  </th>
                  <th class="text-left">
                    youtubeID
                  </th>
                  <th class="text-left">
                    movieID
                  </th>
                  <th class="text-left">
                    length
                  </th>
                  <th class="text-left">
                    category
                  </th>
                  <th class="text-left">
                    tag1
                  </th>
                  <th class="text-left">
                    tag2
                  </th>
                  <th class="text-left">
                    tag3
                  </th>
                  <th>
                    　dl count　
                  </th>
                  <th>
                    　　
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="table" v-for="movie in getMovies" :key="movie.id">
                  <td>{{ movie.name }}</td>
                  <td>{{ movie.desc }}</td>
                  <td>{{ movie.yt_id }}</td>
                  <td>{{ movie.mv_id }}</td>
                  <td>{{ movie.length }}</td>
                  <td>{{ movie.category }}</td>
                  <td>{{ movie.tag1 }}</td>
                  <td>{{ movie.tag2}}</td>
                  <td>{{ movie.tag3 }}</td>
                  <td>{{ movie.dl_count }}</td>
                  <td>
                    <nuxt-link :to="`register/${movie.id}`">
                      <v-btn depressed color="error" class="c-primary_btn">
                        編集
                      </v-btn>
                    </nuxt-link>
                    <v-btn depressed color="error" class="remove_btn" v-on:click.prevent="remove(movie.id)">
                      削除
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </div>
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
        dl_count: '',
        movie_data: [],
        parPage: 10,
        current_page:1,
        input:''
      }
    },
    created: function () {
      this.$store.dispatch('movies/init');
    },
    methods: {
      remove(id) {
        this.$store.dispatch('movies/remove', id)
      }
    },
    computed: {
      movies() {
        // return this.$store.state.movies.movies
        return this.$store.getters['movies/orderdMovies']
      },
      getMovies(){
        let current = this.current_page * this.parPage;
        let start = current - this.parPage;
        return this.movies.slice(start,current)
      },
      getPageCount(){
        return Math.ceil(this.movies.length / this.parPage)
      }
    },
    watch:{
      search(){
        this.current_page = 1
      }
    }
  }

</script>

<style>
  .p-edit_ttl {
    margin-bottom: 1rem;
  }

  .c-primary_btn {
    background-color: #1867c0 !important;
    text-align: right;
    margin:.7rem 0 0!important;
  }

  .c-primary_btn--new{
      background-color: #1867c0 !important;
      margin: 0 0 2rem!important;

  }

  .thead-bg {
    background-color: #eee !important;
  }

  .text-left {
    text-align: left;
    font-weight: bold;
  }

  .remove_btn {
    background-color: #ff5252 !important;
    color: #fff !important;
    font-weight: bold;
    margin-top:.2rem!important;
    margin-bottom:.7rem!important;
  }

.theme--light.v-pagination .v-pagination__item--active{
    color: #1867c0 !important;
}

.p-page{
    margin-top:3rem
}

.table{
    padding: 1rem 0;
}

.p-register_wrap{
  padding-top: 2rem;
}
</style>
