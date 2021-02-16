import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
const reCom = ()=>import('../components/reCom')
const index = ()=>import('../components/index')
const hot = ()=>import('../components/hot')
const search = ()=>import('../components/search')
const play = ()=>import('../components/play')
const playlist = ()=>import('../components/playlist')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      //重定向
      redirect:'/reCom'
    },
    {
      path: '/',
      component: index,
      children:[
        //路由的子路由的path不建议带'/'，如果带要写完整路径
        {path: 'reCom', component: reCom},
        {path: 'hot', component: hot},
        {path: 'search', component: search}
      ]
    },
    {
      path: '/play/:id',
      name:'play',
      component:play,
    },
    {
      path: '/playlist/:id',
      component:playlist
    },
  ]
})
