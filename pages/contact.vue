<template>
  <div class="p-content">
    <!-- パンクず -->
    <div class="p-pankuzu">
      <NuxtLink to="/">moolike</NuxtLink><span> > </span>
      <NuxtLink :to="`/contact`" class="p-pankuzu_inactive">リクエスト/contact</NuxtLink>
    </div>
    <!-- パンクず -->
    <h1 class="p-content_subTtl p-content_subTtl--underline">リクエスト/contact</h1>
    <div class="p-sub_content">
      <p class="page-copy p-page__desc">
        当ウェブサイトをご利用頂き誠にありがとうございます。<br><br>
        
        「こんなポーズの素材が欲しい！！」「あのイラストのようなイラストが欲しい！」など素材のリクエストや<br>
        「Youtubeの動画編集」「結婚式ムービー」の作成を依頼したい！ような動画編集の依頼など募集しています!<br><br>
      </p>
      <div class="p-form__message">
        <p class="p-form__message__desc">お手数ですが<a class="p-form__message__link"
            href="https://www.moolike-stock.com/privacy">プライバシーポリシー</a>を一読の上お進みください</p>
      </div>
      <form name="contact" method="POST" netlify class="form" action="/submit/">
        <p class="form_item">
        <input type="hidden" name="form-name" value="contact" />
          <label class="form__label">お名前(ニックネーム可): <span class="form__attention">必須</span><input type="text" name="name" class="form_1coltext" /></label>
        </p>
        <p class="form_item">
          <label class="form__label">メールアドレス(任意): <input type="email" name="email" class="form_1coltext" /></label>
        </p>
        <p class="form_item">
          <label class="form__label">お問合せ内容: <textarea name="message" class="form__textarea" rows="4"></textarea></label>
        </p>
        <p>
          <button type="submit" class="submit">送信する</button>
        </p>
      </form>
    </div>
    <div class="p-more_btn">
      　<NuxtLink to="/" class="p-more_btn__link">
        トップに戻る　
      </NuxtLink>
    </div>
  </div>
</template>
<style>


</style>
