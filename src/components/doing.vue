<template>
  <div class="doing">
    <input type="text" placeholder="接下来要做点什么"
           v-model="newData"
           @keyup.enter="addData"
           class="new-data">
    <ul>
      <li v-for="(item,index) in doingArr" class="data-item">
        <span>
          <el-button type="primary" @click="check(index)" size="mini" class="btn">
          <i class="el-icon-check"></i>
        </el-button>
        {{item.dataItem}}</span>
        <span class="time">{{item.time}}</span>
      </li>
    </ul>
    <el-button type="danger" @click="clear" class="clear-btn">清除
      <i class="el-icon-delete el-icon--left"></i>
    </el-button>
    <el-dialog title="提示" v-model="dialogVisible">
      <span>添加事件不能为空！</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>

  import store from '../../localstorage/store.everything.min'
  export default {
    data(){
      return {
        doingArr: [], allArr: [], downArr: [], newData: '',
        time: '',
        dialogVisible: false
      }
    },
    mounted: function () {
      let that = this;
//      this.doingArr = this.getArr(that.doingArr, 'doingArr').arrName

      this.getDoingArr();
      this.getAllArr();
      this.getDownArr();
    },
    methods: {
      addData(){
        if (this.newData) {
          this.doingArr.push({dataItem: this.newData, time: new Date().toLocaleString()});
          store.set('doingArr', this.doingArr);
          this.allArr.push({dataItem: this.newData, time: new Date().toLocaleString()});
          store.set('allArr', this.allArr);
          this.newData = '';
        } else {
          this.dialogVisible = true;
        }
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
        return arrName
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
  @import "../assets/style/data-item.css";

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
