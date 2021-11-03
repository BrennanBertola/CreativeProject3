<template>
<div>
  <h1>Alter component, make similar to ProductList.vue but removes instead, add message when cart is empty</h1>
  <h1>Shopping Cart</h1>
  <ProductList :products="products" />
</div>
</template>



<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Cart',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
    }
  },

  computed: {
    products() {
      return this.$root.$data.cart;
    }

  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
