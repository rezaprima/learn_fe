<template>
  <header class="navbar">
    <header>
        <div id="title" @click="openProductList">Jualanku</div>
        <div id="shopping_cart"><img src="../assets/shopping-cart-white.svg" alt=""></div>
        <div id="login" @click="openLogin"><img src="../assets/log-in.svg" alt=""></div>
    </header>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
	openLogin: function () {
		this.$emit('change-page', 'login')
	},
	openProductList: function () {
		this.$emit('change-page', 'product-list')
	}
  }
}
</script>

<style scoped>
  header{
    background-color: #cc1b4a;
    display: flex;
    margin: auto;
    justify-content: flex-end;
    padding-top: 5px;
  }
  #title{
    flex-grow: 10;
    flex-basis: auto;
    padding-left: 10px;
    color: white;
    margin: auto;
    font-weight: bolder;
    text-decoration: none;
  }
  #shopping_cart{
    display: inline;
    flex-grow: 0;
    flex-shrink: 1;
  }
  #login{
    display: inline;
    flex-grow: 0;
    flex-shrink: 1;
  }
</style>
