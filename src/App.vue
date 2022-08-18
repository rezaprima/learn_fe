<template>
  <div class="body">
    <nav-bar v-on:change-page="changePage"/>
    <login v-if="page==='login'"/>
    <product-list v-if="page==='product-list'" v-on:choose-product="showProduct"/>
    <product-detail v-bind:product="product" v-if="page==='product-detail'" v-on:back-to-list="backToList"/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import ProductList from './components/ProductList.vue'
import ProductDetail from './components/ProductDetail.vue'
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar, Login, ProductList, ProductDetail },
  name: 'App',
  data: function () {
    return {
      page: 'product-list',
      product: {}
    }
  },
  methods: {
    changePage: function (newPage) {
      this.page = newPage
    },
    showProduct: function (product) {
      this.product = product
      this.page = 'product-detail'
    },
    backToList: function () {
      this.product = {}
      this.page = 'product-list'
    }
  }
}
</script>

<style>
  body{
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
