<template>
  <div class="doing">
    <input type="text" placeholder="接下来要做点什么"
           v-model="newData"
           @keyup.enter="addData"
           class="new-data">
    <ul>
      <li v-for="(item,index) in doingArr" class="data-item">
        <span><el-button type="primary" @click="check(index)" size="mini" class="btn">
          <i class="el-icon-check"></i>
        </el-button>
        {{item.dataItem}}</span>
         <span class="time">{{item.time}}</span>
      </li>
    </ul>
    <el-button type="danger" @click="clear" class="clear-btn">清除
      <i class="el-icon-delete el-icon--left"></i>
    </el-button>

  </div>
</template>
<script>

  import store from '../../../localstorage/store.everything.min'
  export default {
    data(){
      return {
        doingArr: [], allArr: [], downArr: [], newData: '',
        time: ''
      }
    },
    mounted: function () {
      this.getDoingArr();
      this.getAllArr();
      this.getDownArr();
    },
    methods: {
      addData(){
        this.doingArr.push({dataItem: this.newData,time:new Date().toLocaleString()});
        store.set('doingArr', this.doingArr);
        this.allArr.push({dataItem: this.newData,time:new Date().toLocaleString()});
        store.set('allArr', this.allArr);
        this.newData = '';
      },
      getDoingArr(){
        let localDoingArr = store.get('doingArr');
        if (localDoingArr) {
          this.doingArr = localDoingArr;
        } else {
          this.doingArr = [];
        }
      },
      getAllArr(){
        let localAllArr = store.get('allArr');
        if (localAllArr) {
          this.allArr = localAllArr;
        } else {
          this.allArr = [];
        }
      },
      getDownArr(){
        let localDownArr = store.get('downArr');
        if (localDownArr) {
          this.downArr = localDownArr;
        } else {
          this.downArr = [];
        }
      },
      getArr(arrName, localName){
        let localArr = store.get(localName);
        if (localArr) {
          arrName = localArr;
        } else {
          arrName = [];
        }
      },
      check(index){
        let downItem = this.doingArr[index];
        this.downArr.push(downItem)
        store.set('downArr', this.downArr)
        this.doingArr.splice(index, 1);
        store.set('doingArr', this.doingArr);

      },
      clear(){
        store.clear();
        this.doingArr = [];
        this.allArr = [];
        this.downArr = [];
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/style/data-item.css";

  .new-data {
    width: 96%;
    padding: 6px;
    outline: medium;
    border: 2px solid #0ea1ee;
  }

  .clear-btn {
    float: right;
  }

</style>
