<template>
  <div class="p-content">
    <!-- パンクず -->
    <div class="p-pankuzu">
      <NuxtLink to="/">moolike</NuxtLink><span> > </span>
      <NuxtLink :to="`/contact`" class="p-pankuzu_inactive">お問い合わせ/contact</NuxtLink>
    </div>
    <!-- パンクず -->
    <h1 class="p-content_subTtl p-content_subTtl--underline">お問い合わせ/contact</h1>
    <div class="p-sub_content">
      <p class="p-page-copy p-page__desc">
        当ウェブサイトをご利用頂き誠にありがとうございます。
        制作依頼、ご意見、ご要望、気軽にお送りください。<br>
        お問い合わせ内容をいただいた後数日のうちに返信させて頂きます。
      </p>
      <div class="p-form__message">
        <p class="p-form__message__desc">お手数ですが<a class="p-form__message__link"
            href="https://www.moolike-stock.com/privacy">プライバシーポリシー</a>を一読の上お進みください</p>
      </div>
      <!--form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdmpvI1aFgP803f2X3Z2SCB4MWPWMcoGWs5mSKPq3KOftKXOQ/formResponse" class="form">
            <div class="form_item">
                <label class="form__label" for="nameval">お名前<span class="form__attention">必須</span></label>
                <input id="nameval" type="text" name="entry.1540414008" class="form_1coltext" required></div>
            <div class="form_item">
                <label class="form__label" for="mailval">メールアドレス<span class="form__attention">必須</span></label>
                <input class="form_1coltext" type="email" name="entry.653351798" id="mailval" required />
            </div>
            <div class="form_item">
                <label class="form__label" for="textval">お問い合わせ内容<span class="form__attention">必須</span></label>
                <textarea class="form__textarea" name="entry.8665556" id="textval" cols="30" rows="10"
                    placeholder="内容を入力してください" required></textarea>
            </div>
            <button class="submit" type="submit" name="button" value="送信する">送信する</button>
        </form-->
      <form name="contact" method="POST" data-netlify="true" class="form">
        <input type="hidden" name="contact" :value="contact" />
        <div v-show="false">
          <label for="bot">スパムでない場合は空欄</label>
          <input id="bot" type="text" name="bot-field" />
        </div>
        <div class="form_item">
          <label>お名前(ニックネーム可)<span class="form__attention">必須</span>　<input type="text" name="name"
              class="form_1coltext" /></label>
        </div>
        <div class="form_item">
          <label>メールアドレス<span class="form__attention">必須</span>　 <input type="email" name="email"
              class="form_1coltext" /></label>
        </div>
        <div class="form_item">
          <label>お問い合わせ内容<span class="form__attention">必須</span>　 <textarea name="message" class="form__textarea"
              cols="30" rows="10"></textarea></label>
        </div>
        <div class="form_item">
          <button type="submit" class="submit">送信する</button>
        </div>
      </form>
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
    max-width: 90%;
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
