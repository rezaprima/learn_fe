<template>
  <div class="body">
    <nav-bar/>
    <login/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar, Login },
  name: 'App'
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
