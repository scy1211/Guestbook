<template>
  <div id="app">
    <v-header></v-header>
    <div class="router-viwe">
      <transition
              enter-active-class="animated bounceOut"
              leave-active-class="animated bounceOut"
      >
      <router-view></router-view>
      </transition>
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
  @import "assets/style/animate.css";
  ul{list-style: none;padding: 0;}
  a{text-decoration: none;}
  #app {font-size: 14px;font-family: '微软雅黑';color: #999;}
  .router-viwe{padding: 10px;}
  #app .router-link-active{border-bottom: 4px solid #08dcc8;}
  .animated{transition: all .3s linear;}
</style>
