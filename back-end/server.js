const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the museum: a title and a path to an image.
const gameSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  year: String,
  path: String
});

// Create a model for items in the museum.
const Game = mongoose.model('Game', gameSchema);

// connect to the database
mongoose.connect('mongodb://localhost:27017/touhou', {
  useNewUrlParser: true
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/games', async (req, res) => {
  const game = new Game({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    year: req.body.year,
    path: req.body.path
  });
  try {
    await game.save();
    res.send(game);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Get a list of all of the items in the museum.
app.get('/api/games', async (req, res) => {
  try {
    let game = await Game.find();
    res.send(game);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/games/:id', async (req, res) => {
  try {
    await Game.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/games/:id', async (req, res) => {
  try {
    let game = await Game.findOne({
      _id: req.params.id
    });
    game.name = req.body.name;
    game.price = req.body.price;
    game.year = req.body.year;
    await game.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3002, () => console.log('Server listening on port 3002!'));