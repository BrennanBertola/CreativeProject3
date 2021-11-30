<template>
<div class="admin">
  <div class="heading">
    <h2>Add a Game</h2>
  </div>
  <div class="add">
    <div class="form">
      <input v-model="name" placeholder="Name">
      <p></p>
      <input v-model="year" placeholder="Year">
      <p></p>
      <input v-model="price" placeholder="Price">
      <p></p>
      <input type="file" name="photo" @change="fileChanged">
      <button @click="upload">Upload</button>
    </div>
    <div class="upload" v-if="addGame">
      <h2>{{addGame.name}}</h2>
      <img :src="addGame.path" />
    </div>
  </div>

  <div class="heading">
    <h2>Edit/Delete an Item</h2>
  </div>
  <div class="edit">
    <div class="form">
      <input v-model="findName" placeholder="Search">
      <div class="suggestions" v-if="suggestions.length > 0">
        <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectGame(s)">{{s.name}}
        </div>
      </div>
    </div>
    <div class="upload" v-if="findGame">
      <input v-model="findGame.name">
      <p></p>
      <input v-model="findGame.year">
      <p></p>
      <input v-model="findGame.price">
      <p></p>
      <img :src="findGame.path" />
    </div>
    <div class="actions" v-if="findGame">
      <button @click="deleteGame(findGame)">Delete</button>
      <button @click="editGame(findGame)">Edit</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      name: "",
      year: "",
      price: "",
      file: null,
      addGame: null,
      games: [],
      findName: "",
      findYear: "",
      findPrice: "",
      findGame: null,

    }
  },

  computed: {
    suggestions() {
      let games = this.games.filter(game => game.name.toLowerCase().startsWith(this.findName.toLowerCase()));
      return games.sort((a, b) => a.name > b.name);
    }
  },

  created() {
    this.getGames();
  },

  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },

    selectGame(game) {
      this.findName = "";
      this.findYear = "";
      this.findPrice = "";
      this.findGame = game;
    },

    async getGames() {
      try {
        let response = await axios.get("/api/games");
        this.games = response.data;
        this.$root.$data.products = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let length = this.$root.$data.products.length;
        console.log(length);
        let r2 = await axios.post('/api/games', {
          id: length + 1,
          name: this.name,
          price: this.price,
          year: this.year,
          path: r1.data.path
        });
        this.addGame = r2.data;
        this.getGames();
      } catch (error) {
        console.log(error);
      }
    },

    async deleteGame(game) {
      try {
        await axios.delete("/api/games/" + game._id);
        this.findGame = null;
        this.getGames();
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async editGame(game) {
      try {
        await axios.put("/api/games/" + game._id, {
          name: this.findGame.name,
          price: this.findGame.price,
          year: this.findGame.year,
        });
        this.findGame = null;
        this.getGames();
        return true;
      } catch (error) {
        console.log(error);
      }
    },

  }
}
</script>


<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>
