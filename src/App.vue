<template>
  <div id="app">
    <v-header></v-header>
    <div class="router-viwe">
      <transition name="slide-fade">
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
  ul{list-style: none;padding: 0;}
  a{text-decoration: none;}
  #app {font-size: 14px;font-family: '微软雅黑';color: #999;}
  .router-viwe{padding: 10px;}
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(6px);
    opacity: 0;
  }
  #app .router-link-active{border-bottom: 4px solid #08dcc8;}
</style>
