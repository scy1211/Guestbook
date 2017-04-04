import Vue from 'vue'
import Router from 'vue-router'

import doing from '../components/doing.vue'
import all from '../components/all.vue'
import down from '../components/down.vue'
Vue.use(Router)

const doingC = doing
const allgC = all
const downC = down
//定义路由，（计划事项，已完成事项，全部事项）
export default new Router({
  routes: [
    {path: '/doing', component: doingC},
    {path: '/all', component: allgC},
    {path: '/down', component: downC}

  ]
})
