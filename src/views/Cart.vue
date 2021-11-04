<template>
<div>
  <h1>Shopping Cart</h1>
  <div v-if="this.$root.$data.isEmpty">
    <h2>Cart Is Empty</h2>
  </div>

  <div v-else>
    <CartList :products="products" />
  </div>
</div>
</template>



<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Cart',
  components: {
    CartList
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
