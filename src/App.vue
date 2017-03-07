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
  export default {
    name: 'app',
    components: {
      'v-header': header
    }
  }
</script>

<style>
  @import "assets/style/normalize.css";
  ul{list-style: none;}
a{text-decoration: none;}
  #app {}
  .router-viwe{padding: 10px;}
</style>
