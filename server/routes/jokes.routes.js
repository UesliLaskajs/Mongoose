const jokesControllers = require("../controllers/joke.controllers");

module.exports = app => {
  app.get("/api/jokes", jokesControllers.getAllJokes);
  app.get("/api/jokes/:id", jokesControllers.getJoke);
  app.post("/api/jokes", jokesControllers.createJoke);
  app.patch("/api/jokes/:id", jokesControllers.updateJoke); 
  app.delete("/api/jokes/:id", jokesControllers.deleteJoke);
};
