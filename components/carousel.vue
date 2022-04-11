<template>
  <div>
    <VueSlickCarousel v-bind="settings" class="p-slide">
      <div class="p-slide_item"><NuxtLink to="/category/wedding"><img class="p-slide_img" src="/wedding.webp"></NuxtLink></div>
      <div class="p-slide_item"><NuxtLink to="/tags/countdown"><img class="p-slide_img" src="/countdown.webp"></NuxtLink></div>
      <div class="p-slide_item"><NuxtLink to="/tags/handfree"><img class="p-slide_img" src="/handfree.webp"></NuxtLink></div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
       data() {
      return {
        settings: {
        "centerMode": true,
         "dots": false,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "touchThreshold": 5,
        "autoplay":true,
        "variableWidth": true,
        "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "initialSlide": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "variableWidth": false,
        "slidesToShow": 1,
        "centerPadding": "55px",
        "slidesToScroll": 1,
        "autoplay":true,
      }
    }]
        },
      }
    },
    name: 'MyComponent',
    components: { VueSlickCarousel },
  }
</script> 