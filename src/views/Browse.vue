<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('$10')" href="#" class="pure-menu-link">$10</a></li>
      <li class="pure-menu-item"><a @click="select('$15')" href="#" class="pure-menu-link">$15</a></li>
      <li class="pure-menu-item"><a @click="select('$20')" href="#" class="pure-menu-link">$20</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      price: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.price === this.price);
    }
  },
  methods: {
    select(price) {
      this.price = price;
    }
  }
}
</script>
