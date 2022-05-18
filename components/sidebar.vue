<template>
  <div class="sidebar">
    <div>
      <h3 class="p-sidebar_ttl">カテゴリから探す</h3>
      <ul class="p-sidebar_category" v-for="category in categories" :key="category.id">
        <li class="p-sidebar_category__item">
          <NuxtLink :to="`/category/${category.id}`">
            {{category.name}}
          </NuxtLink>
          </li>
      </ul>
    </div>
    <div class="p-sidebar_contents">
      <h3 class="p-sidebar_ttl">タグから探す</h3>
      <ul class="p-sidebar_category" v-for="tag in tags" :key="tag.id">
        <li class="p-sidebar_category__item">
          <NuxtLink :to="`/tags/${tag.param}`">
            {{tag.tag}}
          </NuxtLink>
          </li>
      </ul>
    </div>
    <div class="p-sidebar_contents">
        <h3 class="p-sidebar_ttl">その他</h3>
        <ul class="p-sidebar_category">
            <li class="p-sidebar_category__item">
            <NuxtLink to="/newmaterial/">
            新着素材
            </NuxtLink>
            </li>
            <li class="p-sidebar_category__item">
            <NuxtLink to="/ranking/">
            人気素材
            </NuxtLink>
            </li>
            <li class="p-sidebar_category__item">
            <NuxtLink to="/contact/">
            リクエスト/お問い合せ
            </NuxtLink>
            </li>
            <li class="p-sidebar_category__item">
            <NuxtLink to="/about/">
            moolikeについて
            </NuxtLink>
            </li>
        </ul>
            <adsbygoogle ad-slot="6025646828" style="margin:3rem auto;"/>
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
            tag: 'エフェクト',param:'effect'
          },
          {
            tag: 'スタート素材',param:'start'
          },
          {
            tag: '背景',param:'background'
          },
          {
            tag: '人物',param:'people'
          },
          {
            tag: 'おもしろ',param:'interesting'
          },
          {
            tag: 'パロディ',param:'parody'
          },
          {
            tag: 'おもしろ',param:'music'
          },
          {
            tag: 'その他',param:'other'
          },
        ],
      }
    }
  }

</script>
<style>
.p-sidebar_ttl{
   font-weight: bold; 
   font-size: 1.6rem;
   margin-bottom: 1rem;
}


.p-sidebar_category__item{
  font-size: 1.4rem;
  padding: 1rem;
  padding-left: 1rem;
  margin: .3rem 0;
  position: relative;
    transition: all .3s;
    cursor:pointer;
}

.p-sidebar_category__item::after{
  content: '';
 position: absolute;
   width: 10px;
  height: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: transparent transparent #999 #999;
  top:50%;
  right: 30px;
  transform: rotate(225deg) translateY(70%);
  transition: all .3s;
}

.p-sidebar_category__item:hover{
  background-color: #e9e9e9;
  color:#1C4D50;
}

.p-sidebar_category__item:hover::after{
  right: 20px;
}

.p-sidebar_contents{
  margin-top: 4rem;
  position: relative;
  padding-top: 4rem;
}

.p-sidebar_contents::before{
  position: absolute;
  content: '';
  width: 100%;
  height: 0.09rem;
  top: 0px;
  background: #e9e9e9;
}

</style>