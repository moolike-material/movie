<template>
<div class="p-header_hum__category">
    <div>
        <h3 class="p-header_hum__category_ttl">カテゴリから探す</h3>
        <ul class="p-header_hum__category_category" v-for="category in categories" :key="category.id">
            <li class="p-header_hum__category_category__item">
            <NuxtLink :to="`/category/${category.id}`">
            {{category.name}}
            </NuxtLink>
            </li>
        </ul>
    </div>
    <div class="p-header_hum__category_contents">
        <h3 class="p-header_hum__category_ttl">タグから探す</h3>
        <ul class="p-header_hum__category_category" v-for="tag in tags" :key="tag.id">
            <li class="p-header_hum__category_category__item">
            <NuxtLink :to="`/tags/${tag.param}`">
            {{tag.tag}}
            </NuxtLink>
            </li>
        </ul>
    </div>
    <div class="p-header_hum__category_contents">
        <h3 class="p-header_hum__category_ttl">メニュー</h3>
        <ul class="p-header_hum__category_category">
            <li class="p-header_hum__category_category__item">
            <NuxtLink to="/newmaterial/">
            新着素材
            </NuxtLink>
            </li>
            <li class="p-header_hum__category_category__item">
            <NuxtLink to="/ranking/">
            人気素材
            </NuxtLink>
            </li>
            <li class="p-header_hum__category_category__item">
            <NuxtLink to="/contact/">
            お問い合せ
            </NuxtLink>
            </li>
            <li class="p-header_hum__category_category__item">
            <NuxtLink to="/about/">
            moolikeについて
            </NuxtLink>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
  export default {
    data: function () {
      return {
        categories: [{
            "id": "youtube",
            "name": "youtube",
          },
          {
            "id": "wedding",
            "name": "結婚式"
          },
          {
            "id": "smartphone",
            "name": "スマホサイズ"
          },
          {
            "id": "business",
            "name": "ビジネス"
          },
        ],    
        tags: [
          {
            tag: '手書き風',param:'handfree'
          },
          {
            tag: 'フィルター',param:'filter'
          },
          {
            tag: '日常',param:'days'
          },
          {
            tag: 'カウントダウン',param:'countdown'
          },
          {
            tag: 'v-log',param:'v-log'
          },
          {
            tag: 'サプライズ',param:'surprise'
          },
          {
            tag: '結婚式',param:'wedding'
          },
        ],
      }
    }
  }

</script>