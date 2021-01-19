const JokesController = require("../controllers/jokes.controller");
const Joke = require("../models/jokes.model")



module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.get("/api/jokes/:id", JokesController.findJoke);
    app.put("/api/jokes/update/:id", JokesController.updateJoke);
    app.post("/api/jokes/new", JokesController.createJoke);
    app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
};
