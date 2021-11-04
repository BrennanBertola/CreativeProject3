<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="year">
        <h1>Year Released: {{product.year}}</h1>
      </div>
      <div class="price">
        <h2>{{product.price}}</h2>
        <button v-on:click="remove(product)" class="auto">Remove</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    remove(product) {
      for (var i = 0; i < this.$root.$data.cart.length; ++i) {
        if (this.$root.$data.cart[i] === product) {
          this.$root.$data.cart.splice(i, 1);
          if (this.$root.$data.cart.length === 0) {
            this.$root.$data.isEmpty = true;
          }
          break;
        }
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F260b5;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.year {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9c78b7;
  color: #000;
  padding: 10px 30px;
  margin-bottom: 5px;
  height: 25px;
}


.info h1 {
  text-align: center;
  font-size: 16px;
}

.year h1 {
  text-align: center;
  font-size: 14px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #682a77;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
