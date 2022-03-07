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
                    moolike（以下「当サイト」）における個人情報の取り扱い、およびプライバシーポリシーは下記のとおりです。
                </p>
            </div>
            <div class="page__block">
                <h3 class="page__subttl">個人情報に関する取り扱いにつきまして</h3>
                <p class="page__desc">
                    個人情報とは、個人に関する情報であり、その情報に含まれる氏名、生年月日、Eメールアドレス、その他の記述、画像若しくは音声又は個人別に付与された番号、記号その他の符号によりその個人を識別できるものをいいます。<br><br>

                    当サイトでは、お預かりした個人情報は適切に管理し、ご連絡時ならびにお問い合わせに対するご連絡でのみ利用します。<br>
                    法令に基づいて開示が必要な場合を除いて、個人情報を第三者に開示することはありません。
                </p>
            </div>
            <div class="page__block">
                <h3 class="page__subttl">個人情報の収集</h3>
                <p class="page__desc">
                当サイトでは、サービスをご利用いただく際に、個人情報を収集させていただく場合があります。<br>
                これらの情報は、すべて下記の収集目的に従って、適法かつ公正な手段により収集されます。<br>
                人種、民族、家系、家柄、本籍地、宗教、政治的見解及び労働組合への加盟に関わる個人情報については、これを収集・利用いたしません。
                </p>
            </div>
            <div class="page__block">
                <h3 class="page__subttl">セキュリティについて</h3>
                <p class="page__desc">
                個人情報の登録が発生するWEBページではデータ送信の際に、業界で機密保持の標準規格として使用されているSSL(Secure Socket Layer)暗号化技術を使用しております。
                </p>
            </div>
            <div class="page__block">
                <h3 class="page__subttl">外部コンテンツとの連携につきまして</h3>
                <p class="page__desc">
                当サイトからリンクやバナー等によって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
                </p>
            </div>
            <div class="page__block">
                <h3 class="page__subttl">アクセス解析ツールについて</h3>
                <p class="page__desc">
                    当サイトは、アクセス解析ツールである「Googleアナリティクス」を利用しています。<br>
                    これは、データ収集のためにCookieを使用しています。また、トラフィックデータが匿名で収集されていますが、<br>
                    個人を特定するものではありません。この機能を停止するには、ブラウザ設定にてCookieを無効にしてください。<br>
                    <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener" class="u-txtDecUL">Googleアナリティクスについてこちら 》</a>
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