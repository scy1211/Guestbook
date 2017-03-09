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
  ul{list-style: none;padding: 0;}
  a{text-decoration: none;}
  #app {font-size: 14px;font-family: '微软雅黑';color: #999;}
  .router-viwe{padding: 10px;}
</style>
