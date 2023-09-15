const mongoose = require("mongoose")

const jokesSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      minlength: [10, "Joke must be at least 10 characters long"]
    },
    punchline: {
      type: String,
      minlength: [3, "Punchline must be at least 3 characters long"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Jokes", jokesSchema);
