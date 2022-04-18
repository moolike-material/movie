<template>
  <div class="p-error">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <p>お探しのページは見つかりませんでした。</p>
    <div class="p-more_btn u-mT4">
    <NuxtLink to="/" class="p-more_btn__link">
      トップに戻る　　
    </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}

.p-error{
  padding: 5rem 1rem;
  height: 40rem;
}
</style>
