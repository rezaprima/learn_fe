<template>
  <div class="body">
    <nav-bar/>
    <login v-if="page==='login'"/>
    <product-list v-if="page==='product-list'"/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import ProductList from './components/ProductList.vue'
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar, Login, ProductList },
  name: 'App',
  data: function () {
    return {
      page: 'product-list'
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
