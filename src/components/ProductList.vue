<template>
  <div>
    <div class="products">
      <div class="product" v-for="product in products" v-bind:key="product.id">
        <div class="photo">
          <a href="product_detail.html">
            <img class="picture" v-bind:src="product.image" />
          </a>
        </div>
        <div class="price">$ {{ product.price }}</div>
        <div class="product_title">{{ product.title }}</div>
        <div class="product_category">{{ product.category }}</div>
        <div class="add_btn">Add to cart</div>
      </div>
    </div>
    <div id="menu">
      <div id="category" @click="toggleCategoryPopup">
        <img src="../assets/server.svg" /> category
      </div>
      <div id="sort_by" @click="toggleSortPopup">
        <img src="../assets/list.svg" /> sort by
      </div>
    </div>
    <div id="category_popup" v-show="showCategoryPopup">
      <div class="category_popup_entry">
        <input type="checkbox" /> electronics
      </div>
      <div class="category_popup_entry"><input type="checkbox" /> jewelery</div>
      <div class="category_popup_entry">
        <input type="checkbox" /> men's clothing
      </div>
      <div class="category_popup_entry">
        <input type="checkbox" /> women's clothing
      </div>
    </div>
    <div id="sort_popup" v-show="showSortPopup">
      <div class="sort_popup_entry" @click="setSort('lowest_price')">
        <div class="popup_entry_title">Lowest Price</div>
        <div class="popup_entry_check">
          <div class="popup_check" v-if="sort==='lowest_price'">
            <img src="../assets/check.svg" />
          </div>
        </div>
      </div>
      <div class="sort_popup_entry">
        <div class="popup_entry_title" @click="setSort('highest_price')">
          Highest Price
        </div>
        <div class="popup_entry_check">
          <div class="popup_check" v-if="sort==='highest_price'">
            <img src="../assets/check.svg" />
          </div>
        </div>
      </div>
      <div class="sort_popup_entry">
        <div class="popup_entry_title" @click="setSort('name')">Name</div>
        <div class="popup_entry_check">
          <div class="popup_check" v-if="sort==='name'"><img src="../assets/check.svg" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data: function () {
    return {
      products: [
		{
			id:1,
			image: '/static/img/picsum7.jpg',
			price: 22.3,
			title: 'Men\'s Casual Premium Slim Fit T-Shirt',
			category: 'men\'s clothing'
		},
		{
			id:2,
			image: '/static/img/picsum1.jpg',
			price: 22.3,
			title: 'Men\'s Casual Premium Slim Fit T-Shirt',
			category: 'men\'s clothing'
		},
		{
			id:3,
			image: '/static/img/picsum2.jpg',
			price: 22.3,
			title: 'Men\'s Casual Premium Slim Fit T-Shirt',
			category: 'men\'s clothing'
		},
		{
			id:4,
			image: '/static/img/picsum3.jpg',
			price: 22.3,
			title: 'Men\'s Casual Premium Slim Fit T-Shirt',
			category: 'men\'s clothing'
		}
	  ],
	  showCategoryPopup: false,
	  showSortPopup: false,
	  sort: '',
    };
  },
  computed: {},
  methods:{
		toggleCategoryPopup: function () {
			this.showCategoryPopup = !this.showCategoryPopup
		},
		toggleSortPopup: function() {
			this.showSortPopup = !this.showSortPopup
		},
		setSort: function (sortName) {
			this.sort = sortName
		}
  }
};
</script>
<style scoped>
.products {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 40px;
}

.product {
  background-color: white;
  display: inline;
  border-radius: 4px;
  margin: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.photo {
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 300px;
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

#menu {
  border-top: solid 1px gray;
  vertical-align: bottom;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-right: auto;
  background-color: white;
  height: 40px;
}

#category {
  margin: auto;
}

#category_popup {
  display: block;
  position: fixed;
  bottom: 40px;
  left: 0;
  background-color: white;
  border: solid 1px gray;
  padding-left: 5px;
  padding-right: 5px;
}

.category_popup_entry {
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: solid 1px gray;
}

.sort_popup_entry {
  padding-top: 3px;
  padding-bottom: 3px;
  border-bottom: solid 1px gray;
}

#sort_popup {
  display: block;
  position: fixed;
  bottom: 40px;
  right: 0;
  background-color: white;
  border: solid 1px gray;
  padding-left: 5px;
  padding-right: 5px;
}

#sort_by {
  margin: auto;
}
</style>