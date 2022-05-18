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
            "id": "surprise",
            "name": "サプライズ"
          },
          {
            "id": "business",
            "name": "ビジネス"
          },
          {
            "id": "handfree",
            "name": "手書き風"
          },
        ],
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
            tag: 'エフェクト',
            param: 'effect'
          },
          {
            tag: 'スタート素材',
            param: 'start'
          },
          {
            tag: '背景',
            param: 'background'
          },
          {
            tag: '人物',
            param: 'people'
          },
          {
            tag: 'おもしろ',
            param: 'interesting'
          },
          {
            tag: 'パロディ',
            param: 'parody'
          },
          {
            tag: 'おもしろ',
            param: 'music'
          },
          {
            tag: 'その他',
            param: 'other'
          }
        ]
      }
    }
  }

</script>
