<template>
  <div>
    <!-- ヘッダー -->
    <header class="p-header">
      <v-container>
        <div class="p-header_inner">
          <NuxtLink to="/">
            <h1 class="p-header_ttl">
              <moolikeLogo />
            </h1>
          </NuxtLink>
          <form @submit.prevent="searchSubmit">
            <v-autocomplete v-model="model" chips :search-input.sync="search" clearable hide-details hide-selected
              label="動画をキーワードで探す" solo class="p-search_header">
            </v-autocomplete>
          </form>
          <nav class="p-nav">
            <ul class="p-nav_list">
              <li class="p-nav_item">
                <NuxtLink to="/newmaterial" class="p-nav_link">新着素材</NuxtLink>
              </li>
              <li class="p-nav_item">
                <NuxtLink to="/ranking" href="#" class="p-nav_link">ランキング</NuxtLink>
              </li>
              <!-- <li class="p-nav_item"><NuxtLink to="/howto" href="#" class="p-nav_link">使用方法</NuxtLink></li> -->
              <li class="p-nav_item">
                <NuxtLink to="/contact">
                  <v-icon large class="mail_icon_color">
                    mdi-email
                  </v-icon>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </v-container>
    </header>
    <!-- メインコンテンツ -->
    <v-main class="main">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer color="primary lighten-1" padless class="p-footer-bg p-footer" height="150px">
      <v-row justify="center" no-gutters class="p-footer_btns mb-6">
        <v-col class="v-input__slot p-footer_btns" width="100%">
          <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2 p-footer_btns mb-6">
            <NuxtLink class="p-footer_btns" :to="`${link.link}`">{{ link.name }}</NuxtLink>
          </v-btn>
        </v-col>
        <v-col class="primary lighten-2 py-4 text-center white--text p-footer_btns" cols="12">
          copyright © moolike all right reserved
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      links: [{
          name: 'Home',
          link: '/'
        },
        {
          name: 'Privacy',
          link: '/privacy'
        },
        {
          name: 'Guideline',
          link: '/guideline'
        },
        {
          name: 'Contact',
          link: '/contact'
        },
      ],
    }),
    methods: {
      searchSubmit() {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = "/search/" + this.search;
        a.click();
        a.remove();
      },
    }

  }

</script>

<style>
  .bg-white {
    background: #fff;
  }

  .main {
    padding-top: 4.5rem !important;
  }

  .p-search_header {
    width: 350px !important;
    border: 1px solid #333;
  }

</style>
