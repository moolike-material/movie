<template>
  <div class="p-content">
      <!-- パンクず -->
    <div class="p-pankuzu">
      <NuxtLink to="/">moolike</NuxtLink><span> > </span>
      <NuxtLink :to="`/contact/`" class="p-pankuzu_inactive">お問い合わせ/contact</NuxtLink>
    </div>
    <!-- パンクず -->
    <h1 class="p-content_subTtl p-content_subTtl--underline u-txtC">送信成功</h1>
    <div class="p-sub_content">
      <p class="page-copy page__desc u-txtC">
        お問い合せありがとうございます！<br>
        頂いた内容は数日のうちにご入力されているメールアドレスに返信させていただきます。<br><br>
        お問い合せではない内容と判断させて頂いたのですが場合、失礼ですが返信は致しかねますのでご了承ください。<br><br>
      </p>
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
