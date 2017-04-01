<template>
  <div class="down">
    <ul>
      <li v-for="(item,index) in downArr" class="data-item">
      <span>
          <el-button type="success"  size="mini" class="btn">
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
  import store from '../../localstorage/store.everything.min'
  export default {
    data(){
      return {
        downArr: []
      }
    },
    mounted:function () {
      this.getDownArr()
    },
    methods: {
      getDownArr(){
        let localDownArr = store.get('downArr');
        if (localDownArr) {
          this.downArr = localDownArr;
        } else {
          this.downArr = [];
        }
      }
    }
  }
</script>

<style scoped>
@import "../assets/style/data-item.css";
</style>
