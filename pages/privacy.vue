<template>
    <div>
    <!-- パンクず -->
    <div class="p-pankuzu">
      <NuxtLink to="/">moolike</NuxtLink><span> > </span>
      <NuxtLink :to="`/privacy`" class="p-pankuzu_inactive">プライバシーポリシー</NuxtLink>
    </div>
    <!-- パンクず -->
    <h1 class="p-content_subTtl p-content_subTtl--underline">プライバシーポリシー/privacy policy</h1>
        <div class="p-sub_content">
            <div class="page__block">
                <h3 class="page__subttl">moolikeは商用利用OKのシンプルな動画素材サイトです。</h3>
                <p class="page__desc">
                    当ウェブサイトは、第三者配信の広告サービス「Google Adsense グーグルアドセンス」を利用しており、<br>
                    この広告配信事業者は、ユーザーの好みに応じて広告を表示するCookieを使用することがあります。<br>
                    Cookieの設定やGoogleアドセンスに関する詳細は、こちらをご覧ください。
                </p>
            </div>
            <div class="page__block">
                <h3 class="page__subttl">アクセス解析ツールについて</h3>
                <p class="page__desc">
                    当サイトは、アクセス解析ツールである「Googleアナリティクス」を利用しています。<br>
                    これは、データ収集のためにCookieを使用しています。また、トラフィックデータが匿名で収集されていますが、<br>
                    個人を特定するものではありません。この機能を停止するには、ブラウザ設定にてCookieを無効にしてください。<br>
                    詳細については、こちらをご覧ください。
                </p>
            </div>
            <div class="page__block">
                <h3 class="page__subttl">免責事項について</h3>
                <p class="page__desc">
                    当サイトに掲載している画像の著作権や肖像権等は各権利所有者に帰属します。権利を侵害する目的はございません。<br>
                    素材などのコンテンツに問題がありましたら、ご連絡ください。<br>
                    当サイトのリンクから他サイトに移動した場合、そのサイトで提供される情報等については、一切の責任を負いません。<br>
                    また、当サイトに掲載されたコンテンツによって生じた損害等については、一切の責任を負いかねますのでご了承ください。
                </p>
            </div>
             <div class="p-more_btn">
            　<NuxtLink to="/" class="p-more_btn__link">
              トップに戻る　
            </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>
.page__block {
    margin-top: 3rem;
}

.page__subttl {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: .18em;
}

.page__desc{
    margin-top: 1rem;
    font-size: .8rem;
    line-height: 1.85;
    letter-spacing: .07em;
    padding-left: 1rem;
}
</style>