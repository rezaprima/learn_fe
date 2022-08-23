import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ProductList from '@/components/ProductList'
import ProductDetail from '@/components/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
