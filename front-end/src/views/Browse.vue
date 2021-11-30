<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('10')" href="#" class="pure-menu-link">Under $10</a></li>
      <li class="pure-menu-item"><a @click="select('15')" href="#" class="pure-menu-link">Under $15</a></li>
      <li class="pure-menu-item"><a @click="select('20')" href="#" class="pure-menu-link">Under $20</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import axios from 'axios'
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
      return this.$root.$data.products.filter(product => product.price <= this.price);
    }
  },

  created() {
    this.getGames();
  },

  methods: {
    select(price) {
      this.price = price;
    },

    async getGames() {
      try {
        let response = await axios.get("/api/games");
        this.$root.$data.products = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
