<template>
  <div class="body">
    <nav-bar/>
    <product-list />
  </div>
</template>

<script>
import ProductList from '../src/components/ProductList.vue'
import NavBar from '../src/components/NavBar.vue'
export default {
  components: { NavBar, ProductList },
  name: 'App',
  data: function () {
    return {
      page: 'product-list',
      product: {}
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
