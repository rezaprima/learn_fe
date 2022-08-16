<template>
  <div>
    <div class="products">
      <div class="product">
        <div class="photo">
          <a href="product_detail.html">
            <img class="picture" src="/static/img/picsum7.jpg" />
          </a>
        </div>
        <div class="price">$ 22.3</div>
        <div class="product_title">Men's Casual Premium Slim Fit T-Shirt</div>
        <div class="product_category">men's clothing</div>
        <div class="add_btn">Add to cart</div>
      </div>
      <div class="product">
        <div class="photo">
          <a href="product_detail.html">
            <img class="picture" src="/static/img/picsum1.jpg" />
          </a>
        </div>
        <div class="price">$ 22.3</div>
        <div class="product_title">Men's Casual Premium Slim Fit T-Shirt</div>
        <div class="product_category">men's clothing</div>
        <div class="add_btn">Add to cart</div>
      </div>
      <div class="product">
        <div class="photo">
          <a href="product_detail.html">
            <img class="picture" src="/static/img/picsum2.jpg" />
          </a>
        </div>
        <div class="price">$ 22.3</div>
        <div class="product_title">Men's Casual Premium Slim Fit T-Shirt</div>
        <div class="product_category">men's clothing</div>
        <div class="add_btn">Add to cart</div>
      </div>
      <div class="product">
        <div class="photo">
          <a href="product_detail.html">
            <img class="picture" src="/static/img/picsum3.jpg" />
          </a>
        </div>
        <div class="price">$ 22.3</div>
        <div class="product_title">Men's Casual Premium Slim Fit T-Shirt</div>
        <div class="product_category">men's clothing</div>
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
    <div id="category_popup" v-show="categoryDisplay==='block'">
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
    <div id="sort_popup" v-show="sortDisplay==='block'">
      <div class="sort_popup_entry" @click="setSort('lowest_price')">
        <div class="popup_entry_title">Lowest Price</div>
        <div class="popup_entry_check">
          <div class="popup_check" id="lowest_price_check" v-if="sort==='lowest_price'">
            <img src="../assets/check.svg" />
          </div>
        </div>
      </div>
      <div class="sort_popup_entry">
        <div class="popup_entry_title" @click="setSort('highest_price')">
          Highest Price
        </div>
        <div class="popup_entry_check">
          <div class="popup_check" id="highest_price_check" v-if="sort==='highest_price'">
            <img src="../assets/check.svg" />
          </div>
        </div>
      </div>
      <div class="sort_popup_entry">
        <div class="popup_entry_title" @click="setSort('name')">Name</div>
        <div class="popup_entry_check">
          <div class="popup_check" id="name_check" v-if="sort==='name'"><img src="../assets/check.svg" /></div>
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
      products: [],
	  categoryDisplay: 'none',
	  sortDisplay: 'none',
	  sort: '',
    };
  },
  computed: {},
  methods:{
		toggleCategoryPopup: function () {
			this.categoryDisplay = (this.categoryDisplay === 'none' ? 'block' : 'none')
		},
		toggleSortPopup: function() {
			this.sortDisplay = (this.sortDisplay === 'none' ? 'block' : 'none')
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