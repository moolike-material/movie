<template>
  <div class="p-content">
    <!-- パンクず -->
    <div class="p-pankuzu">
      <NuxtLink to="/">moolike</NuxtLink><span> > </span>
      <NuxtLink :to="`/contact`" class="p-pankuzu_inactive">リクエスト・お問い合わせ/contact</NuxtLink>
    </div>
    <!-- パンクず -->
    <h1 class="p-content_subTtl p-content_subTtl--underline">リクエスト・お問い合わせ/contact</h1>
    <div class="p-sub_content">
      <p class="page-copy page__desc">
        当ウェブサイトをご利用頂き誠にありがとうございます。<br><br>
        
        「こんなポーズの素材が欲しい！！」「あのイラストのようなイラストが欲しい！」など素材のリクエストや<br>
        「Youtubeの動画編集」「結婚式ムービー」の作成を依頼したい！ような動画編集の依頼など募集しています。<br><br>
        またご利用に関して報告などいただけると大変励みになります！<br>
        お問い合わせ内容をいただいた後数日のうちに返信させて頂きますが場合によっては返信できかねる場合がございます><;;
      </p>
      <div class="p-form__message">
        <p class="p-form__message__desc">お手数ですが<a class="p-form__message__link"
            href="https://www.moolike-stock.com/privacy">プライバシーポリシー</a>を一読の上お進みください</p>
      </div>
      <form name="contact" method="POST" netlify class="form">
        <p class="form_item">
        <input type="hidden" name="form-name" value="contact" />
          <label class="form__label">お名前(ニックネーム可): <span class="form__attention">必須</span><input type="text" name="name" class="form_1coltext" /></label>
        </p>
        <p class="form_item">
          <label class="form__label">メールアドレス: <span class="form__attention">必須</span><input type="email" name="email" class="form_1coltext" /></label>
        </p>
        <p class="form_item">
          <label class="form__label">お問合せ内容: <textarea name="message" class="form__textarea"></textarea></label>
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
  .p-page__desc {
    margin-top: 1.5rem;
  }

  .p-page__desc {
    font-size: 1rem;
    line-height: 1.85;
    letter-spacing: 0.07em;
    padding-left: 1rem;
  }

  .p-form__message {
    width: 100%;
    padding: 1rem;
    margin: 5rem auto 2rem;
    background-color: #f2f2f2
  }

  .p-form__message__desc {
    font-size:.8rem;
    text-align: center;
    color: #777;
  }

  .p-form__message__link {
    border-bottom: 1px dotted #ccc;
    background-color: #f7fac7;
  }

  .form__message__link:hover {
    background: rgb(244, 241, 164);
    border-bottom: 1px dotted rgb(244, 241, 164);
  }

  .form {
    display: block;
    max-width: 80%;
    margin: 0 auto;
    padding: 3rem 0rem;
    font-size: .8rem;
    letter-spacing: 0.09em;

  }

  .form_1coltext,
  .form__select,
  .form__textarea {
    display: block;
    width: 100%;
    padding: .8rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    margin:10px 0

  }

  .form_1coltext:focus,
  .form__select:focus,
  .form__textarea:focus {
    box-shadow: 0 0 1px 1px #fabe00;
    opacity: .7;
    border-color: #fabe00;
  }

  .form__label {
    display: block;
    margin-bottom: .5rem;
    margin-top: 1.2rem;
    font-weight: bold;
  }

  .submit {
    display: block;
    width: 50%;
    margin: 1rem auto 0;
    text-align: center;
    border: 1px solid #333;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 1rem;
    transition: all .3s;
    font-weight:bold;
  }

  .submit:hover {
    background-color: #fabe00;
    color: #fff;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  .form__attention {
    background-color: #E73357;
    color: #fff;
    font-size: .5rem;
    padding: .3rem .5rem;
    display: inline-block;
    margin-left: 2rem;
    transform: translateY(-2px);
  }

</style>
