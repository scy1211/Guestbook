<template>
  <div class="all">
    <ul>
      <li v-for="(item,index) in allArr" class="data-item">
        <span>
          <el-button type="info" size="mini" class="btn">
            <i class="el-icon-document"></i>
          </el-button>
        {{item.dataItem}}
        </span>
        <span class="time">{{item.time}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  //引入localstorage库
  import store from '../../localstorage/store.everything.min'
  export default {
    data(){
      return {
        allArr: [] //初始化所有的列表
      }
    },
    mounted: function () {
      this.getAllArr();
    },
    methods: {
      getAllArr(){
        let localAllArr = store.get('allArr'); //页面初始化时，先尝试去localstorage去拿数据，没有数据则this.allArr为空。
        if (localAllArr) {
          this.allArr = localAllArr;
        } else {
          this.allArr = [];
        }
      }
    }
  }
</script>

<style scoped>
  @import "../assets/style/data-item.css";
</style>
