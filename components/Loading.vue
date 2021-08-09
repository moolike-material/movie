<template>
  <div v-if="loading" class="loading">
      <img src="/Preloader_1.gif" alt="" class="loading-gif">
    <div class="loading__loader">Loading...</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Loading",
  data() {
    return {
      loading: false
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  transition: all 1.2s ease;
  background: rgba(255, 255, 255, 0.9);
  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
  }
}

.loading-gif{
    width: 100px;
    height: 100px;
    margin: auto;
}
</style>