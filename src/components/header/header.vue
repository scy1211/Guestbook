<template>
  <div class="header">
    <router-link to="/doing"><span>待办</span></router-link>
    <router-link to="/down"><span>已完成</span></router-link>
    <router-link to="/all"><span>所有事项</span></router-link>
  </div>
</template>
<script>
  export default {
    name:'header'
  }
</script>

<style scoped>
.header{display: flex;align-items: center;justify-content: space-between;background-color: #0ea1ee;padding: 10px 0;}
  a{width: 32%;text-align: center;color: #fff;}

</style>
