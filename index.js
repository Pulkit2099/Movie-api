// src/index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
require("dotenv").config()
// Connect to MongoDB
const DB = process.env.DATABASE

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));


const movieSchema = new mongoose.Schema({
  title: String,
});

const Movie = mongoose.model('Movie', movieSchema);

app.use(express.json());

// POST /add-movie
app.post('/add-movie', async (req, res) => {
  try {
    const { title } = req.body;
    const movie = new Movie({ title });
    await movie.save();
    res.status(201).json({ message: 'Movie added successfully', movie });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save the movie' });
  }
});

// GET /get-all
app.get('/get-all', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

// GET /get-single/:id
app.get('/get-single/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the movie ID from the URL
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the movie' });
  }
});


// GET /get-paginated?page={page}&size={size}
app.get('/get-paginated', async (req, res) => {
  try {
    const { page = 1, size = 10 } = req.query;
    const skip = (page - 1) * size;
    const movies = await Movie.find().skip(skip).limit(Number(size));
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
