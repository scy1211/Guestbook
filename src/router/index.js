import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import doing from '../components/doing.vue'
import all from '../components/all.vue'
import down from '../components/down.vue'

const doingC = doing
const allgC = all
const downC = down

export default new Router({
  routes: [
    {path: '/doing', component: doingC},
    {path: '/all', component: allgC},
    {path: '/down', component: downC}

  ]
})
