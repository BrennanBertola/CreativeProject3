<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/browse.png">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item browse">
          <img src="/images/cart.png">
          <p>{{numItems}} items</p>
        </div>
      </router-link>
      <router-link to="/admin">
        <div class="menu-item">
          <img src="/images/admin.jpg">
          <p>Admin</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<script>
import axios from 'axios'
export default {

  created() {
    this.getItems();
  },

  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/games");
        this.$root.$data.products = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {
    numItems() {
      if (this.$root.$data.cart.length === undefined) return 0;
      return this.$root.$data.cart.length;
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {

  background-color: #f7f7f7;
}

#app {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>
