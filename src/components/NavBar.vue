<template>
  <header class="navbar">
    <header>
      <router-link to="/">
        <div id="title">
          Jualanku
        </div>
      </router-link>
      <div id="shopping_cart">
        <img src="../assets/shopping-cart-white.svg" alt="" />
      </div>
      <div id="login">
        <router-link to="/login"> <img src="../assets/log-in.svg" alt="" /></router-link>
      </div>
    </header>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
  }
}
</script>

<style scoped>
header {
  background-color: #cc1b4a;
  display: flex;
  margin: auto;
  justify-content: flex-end;
  padding-top: 5px;
}
#title {
  flex-grow: 10;
  flex-basis: auto;
  padding-left: 10px;
  color: white;
  margin: auto;
  font-weight: bolder;
  text-decoration: none;
}
#shopping_cart {
  display: inline;
  flex-grow: 0;
  flex-shrink: 1;
}
#login {
  display: inline;
  flex-grow: 0;
  flex-shrink: 1;
}
</style>
