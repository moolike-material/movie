<template>
  <div>
    <!-- ヘッダー -->
    <header class="p-header">
      <v-container class="p-header_container">
        <div class="p-header_inner">
          <NuxtLink to="/">
            <h1 class="p-header_ttl">
              <moolikeLogo />
            </h1>
          </NuxtLink>
          <form @submit.prevent="searchSubmit">
            <v-autocomplete :search-input.sync="search" label="動画をキーワードで探す" solo class="p-search_header"></v-autocomplete>
          </form>
          <div :class="{'is-active': isActive}" style="width:40%">
          <nav class="p-nav" id="nav">
            <ul class="p-nav_list">
              <li class="p-nav_item">
                <NuxtLink to="/newmaterial/" class="p-nav_link" @click="togglemenu">新着素材</NuxtLink>
              </li>
              <li class="p-nav_item">
                <NuxtLink to="/ranking/" href="#" class="p-nav_link" @click="togglemenu">ランキング</NuxtLink>
              </li>
              <li class="p-nav_item">
                <NuxtLink to="/about/" href="#" class="p-nav_link" @click="togglemenu">moolikeについて</NuxtLink>
              </li>
              <li class="p-nav_item">
                <NuxtLink to="/contact/">
                  <v-icon large class="mail_icon_color" style="font-size:25px!important">
                    mdi-email
                  </v-icon>
                </NuxtLink>
              </li>
            </ul>
             <sidebar />
          </nav>
          </div>
          <div class="hamburger-menu">
            <input type="checkbox" id="menu-btn-check" style="display:none!important">
            <label for="menu-btn-check" class="menu-btn" @click="togglemenu"><span></span></label>
           
          </div>
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
          <v-btn v-for="(link,index) in links" :key="index" color="white" text rounded class="my-2 p-footer_btns mb-6">
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
      isActive:false,
      search:'',
      model:null
    }),
    methods: {
      searchSubmit() {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = "/search/" + this.search;
        a.click();
        a.remove();
      },
      togglemenu() {
        this.isActive = !this.isActive
      }
    }

  }

</script>

<style>
  .p-header_container{
    padding:7px 10px 5px!important
  }

  .bg-white {
    background: #fff;
  }

  .main {
    padding-top: 3.7rem !important;
  }

  .p-search_header {
    width: 350px !important;
    border: 2px solid #ccc;
    border-radius: 20px;
  }

.p-search_header .v-input__control{
  height: 30px!important;
  min-height: 37px!important;
}

.v-label{
  font-size:.8rem ;
}

  .menu-btn {
    display: none;
  }

  @media screen and (max-width:750px) {

    .hamburger-menu{
      display: block!important;
    }
    .menu-btn {
      position: fixed;
      top: 10px;
      right: 10px;
      display: flex;
      height: 60px;
      width: 60px;
      justify-content: center;
      align-items: center;
      z-index: 90;
    }

    .menu-btn span,
    .menu-btn span:before,
    .menu-btn span:after {
      content: '';
      display: block;
      height: 3px;
      width: 25px;
      border-radius: 3px;
      background-color: #FFCC33;
      position: absolute;
      transition: all .3s;
    }

    .menu-btn span:before {
      bottom: 8px;
    }

    .menu-btn span:after {
      top: 8px;
    }

    #menu-btn-check:checked~.menu-btn span {
      background-color: rgba(255, 255, 255, 0);
      /*メニューオープン時は真ん中の線を透明にする*/
    }

    #menu-btn-check:checked~.menu-btn span::before {
      bottom: 0;
      transform: rotate(45deg);
    }

    #menu-btn-check:checked~.menu-btn span::after {
      top: 0;
      transform: rotate(-45deg);
    }


    .p-nav {
      display: block;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 100%;
      z-index: 80;
      background-color: #fff;
      transition: all 0.5s;
      padding: 5rem 2rem;
      font-size: 2rem;
    }

    .is-active{
      width: auto;
    }

    .is-active .p-nav{
      left: 0;
      font-size: 2rem;
    }

    .p-nav .sidebar{
      margin-top: 2rem;
      display: block!important;
    }

    .p-nav_list{
      display: block;
    }
  }

.p-nav .sidebar,
.hamburger-menu{
  display: none;
}
</style>
