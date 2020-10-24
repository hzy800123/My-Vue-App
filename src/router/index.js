import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LearnAxios from '@/components/LearnAxios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'LearnAxios',
      component: LearnAxios
    }
  ]
})
