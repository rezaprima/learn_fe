<template>
  <div class="product_detail">
    <div class="product">
      <div id="back_btn">
        <div id="back_btn_img" @click="back">
		  <img src="../assets/chevron-left.svg" />
        </div>
      </div>
      <div class="photo">
        <img class="picture" :src="product.image" />
      </div>
      <div class="price">
        $ 22.3
        <div id="love" :class="loved ? 'loved':'unloved'" @click="toggleLove">
          <img width="20" height="20" src="../assets/heart.svg" />
        </div>
      </div>
      <div class="product_title">{{ product.title }}</div>
      <div class="product_category">{{ product.category }}</div>
    </div>
    <div class="information">
      <div class="information_title">Information</div>
      <div class="information_content">{{ product.description }}</div>
      <div id="add_btn">Add to Cart</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: ["product"],
  data: function() {
	return {
		loved: false,
	}
  },
  methods:{
	back: function() {
		this.$emit('back-to-list')
	},
	toggleLove: function () {
		this.loved = !this.loved
	}
  }
}
</script>

<style scoped>
#add_btn {
  display: block;
  margin: auto;
  width: 100%;
  background-color: #6ebe40;
  border-radius: 4px;
  text-align: center;
  color: white;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  height: 20px;
}

.product{
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}
.photo {
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 300px;
}

.picture {
  max-width: 190px;
  max-height: 280px;
  width: auto;
  height: auto;
  object-fit: cover;
  margin: auto;
}
.price {
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 3px;
  font-size: large;
  font-weight: bold;
}

.product_title {
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 3px;
  font-weight: bold;
}

.product_category {
  margin-top: 3px;
  margin-bottom: 3px;
  margin-left: 3px;
  color: gray;
}

.information {
  background-color: white;
}

.information_title {
  font-weight: bold;
  font-size: large;
  margin-bottom: 10px;
}

#back_btn {
  margin-top: 10px;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #cc1b4a;
  padding: auto;
  position: fixed;
}

#back_btn_img {
  margin: auto;
  align-items: center;
}

#love {
  /* background-color: gray; */
  width: 24px;
  height: 24px;
  position: fixed;
  margin-left: auto;
  right: 30px;
  border-radius: 12px;
}

.loved {
	background-color: #cc1b4a;
}

.unloved {
	background-color: gray;
}
</style>