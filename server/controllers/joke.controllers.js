const Jokes = require("../models/jokes.models");

// Get all jokes
module.exports.getAllJokes = async (req, res) => {
  try {
    const allJokes = await Jokes.find();
    res.json({ jokes: allJokes });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jokes", details: error.message });
  }
};

// Get a single joke by ID
module.exports.getJoke = async (req, res) => {
  try {
    const jokeSelected = await Jokes.findById(req.params.id);
    if (!jokeSelected) {
      res.status(404).json({ message: "Joke not found" });
    } else {
      res.json({ jokeSelected });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the joke", details: error.message });
  }
};

// Create a new joke
module.exports.createJoke = async (req, res) => {
  try {
    const createdJoke = await Jokes.create(req.body);
    res.status(201).json({ newJoke: createdJoke });
  } catch (error) {
    res.status(500).json({ error: "Failed to create the joke", details: error.message });
  }
};

// Update a joke by ID
module.exports.updateJoke = async (req, res) => {
  try {
    const updatedJoke = await Jokes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJoke) {
      res.status(404).json({ message: "Joke not found" });
    } else {
      res.json({ updatedJoke });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update the joke", details: error.message });
  }
};

// Delete a joke by ID
module.exports.deleteJoke = async (req, res) => {
  try {
    const result = await Jokes.findByIdAndDelete(req.params.id);
    if (!result) {
      res.status(404).json({ message: "Joke not found" });
    } else {
      res.json({ message: "Joke deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the joke", details: error.message });
  }
};
