import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {doingArr: [], downArr: [], all: []};
export default new Vuex.Store({
  state,
  mutations:{
    addData(state,data){
      state.doingArr.push({dataItem:data})
    }
  }
});