<template>
  <div id="app">
    <v-header></v-header>
    <div class="router-viwe">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import store from './vuex/store'
  export default {
    name: 'app',
    components: {
      'v-header': header
    },
    store

  }
</script>

<style>
  @import "assets/style/normalize.css";
  ul{list-style: none;padding: 0;}
  a{text-decoration: none;}
  #app {}
  .router-viwe{padding: 10px;}
</style>
