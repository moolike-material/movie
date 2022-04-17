<template>
  <div>
    <!-- パンクず -->
    <div class="p-pankuzu">
      <NuxtLink to="/">moolike</NuxtLink><span> > </span>
      <NuxtLink :to="`/guideline`" class="p-pankuzu_inactive">moolikeについて/About</NuxtLink>
    </div>
    <!-- パンクず -->
    <h1 class="p-content_subTtl p-content_subTtl--underline">moolikeについて/About</h1>
    <div class="p-sub_content">
      <div class="page__block">
        <div class="page__sub">
          <h3 class="page__subttl">moolikeは商用利用OKのシンプルな動画素材サイトです。</h3>
        </div>
        <p class="page__desc">
          moolikeは運営者である私、pei.nagaeが動画制作を学習する上で生まれた動画素材を配信しているウェブサイトです。<br>
          配信動画はシンプルで使いやすい物をピックアップし提供をしています。<br>
          youtubeやサプライズムービーなど皆様の動画制作のお手伝いに慣れれば幸いです。<br>
          投稿頻度は不定期でして、なかなか更新できない月もありますがご了承ください。（主に仕事が忙しいため...。）
        </p>
      </div>
      <div class="page__block">
        <div class="page__sub">
          <h3 class="page__subttl">運営者 pei.nagaeについて</h3>
        </div>
        <div class="prof_wrap">
          <div>
            <p class="page__desc">
              この度は当サイトに訪問いただきありがとうございます^^*<br>
              仕事の傍、動画編集の学習をしている<span class="p-form__message__link">pei.nagae</span>と申します。<br>
              シンプルなものや可愛いもの、ナチュラルなものが好きなので、<br>そんな感じのテイストの素材をひっそりと制作しております!<br>
              興味ある方はぜひダウンロードをお願いいたします。
            </p>
            <p class="page__desc">
              その他個別作成依頼は随時受け付けています。<br>
              youtube編集、サプライズ動画、結婚式ムービーなど作成をさせていただきますので<br>
              興味のある方はぜひ<nuxt-link to="/contact/" class="p-form__message__link">お問い合わせフォーム</nuxt-link>よりご相談ください。
            </p>
          </div>
          <div class="prof_image">
            <img src="/pei.png" alt="pei.nagaeの写真">
          </div>
        </div>
      </div>
    </div>
    <div class="p-more_btn">
      　<NuxtLink to="/" class="p-more_btn__link">
        トップに戻る　
      </NuxtLink>
    </div>
  </div>
</template>

<style>
  .page__subttl {
    display: inline-block;
    position: relative;
    z-index: 3;
  }


  .prof_wrap {
    display: flex;

  }

  .p-sub_content {
    margin: 0 auto;
  }

  .prof_image {
    width: 15%;
    margin-left: 4rem;
  }

  @media screen and (max-width:750px) {
    .prof_wrap {
      display: block;

    }

    .p-sub_content {
      width: 340px;
      margin: 0 auto;
    }

    .prof_image {
      width: 50%;
      margin: 3rem auto;
    }

  }

</style>
