import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
const reCom = ()=>import('../components/reCom')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/reCom',
      name: 'reCom',
      component: reCom
    }
  ]
})
