<template>
  <div class="header">
    <router-link to="/doing">待办</router-link>
    <router-link to="/down">已完成</router-link>
    <router-link to="/all">所有事项</router-link>
  </div>
</template>
<script>
  export default {
    name: 'header'
  }
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0ea1ee;

  }

  a {
    width: 32%;
    text-align: center;
    color: #fff;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    border-bottom: 4px solid #0ea1ee;
  }

</style>
