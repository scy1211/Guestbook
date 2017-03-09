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
  import store from '../../../localstorage/store.everything.min'

  export default {
    data(){
      return {
        allArr: []
      }
    },
    mounted: function () {
      this.getAllArr();
    },
    methods: {
      getAllArr(){
        let localAllArr = store.get('allArr');
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
  @import "../../assets/style/data-item.css";
</style>
