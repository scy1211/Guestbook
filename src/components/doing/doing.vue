<template>
  <div class="doing">
    <input type="text" placeholder="接下来要做点什么" v-model="newData" @keyup.enter="addData" class="new-data">
    <ul>
      <li v-for="(item,index) in dataArr" @mouseover="hover1" class="data-item">
        <a href="javascript:" @click="check(index)" class="check-box"></a>
        {{item.dataItem}}
      </li>
    </ul>
  </div>
</template>
<script>
  import store from '../../../store/store.legacy.min'
  export default {
    name: 'doing',
    data(){
      return {
        newData: '',
        dataArr: []
      }
    },
    mounted(){
      this.dataArr = store.get('dataItem')
    },
    methods: {
      addData(){
        this.dataArr.push({dataItem:this.newData});
        this.newData = '';
        store.set('dataItem', this.dataArr);
      },
      check(index){
        this.dataArr.splice(index, 1);
        store.set('dataItem', this.dataArr);
      },
      hover1(){

      }
    }
  }
</script>

<style scoped>
  .new-data {
    width: 80%;
    padding: 6px;
    outline: medium;
  }
  .data-item{padding-bottom: 20px;}
  .check-box{display: inline-block;width: 20px;height: 20px;border: 1px solid #0ea1ee;border-radius: 50%;position: relative;top: 6px;margin-right: 20px;}
</style>
