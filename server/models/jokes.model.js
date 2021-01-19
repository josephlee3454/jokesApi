const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const JokeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [10, "title must be at least 10 "]
    },
    joke:  {
        type: String,
        required: [true, "a joke is required"],
        minlength: [3, "joke must be at least 13 "]
    },
    punchline:  {
        type: String,
        required: [true, "a punchline is required"],
        minlength: [3, "a punchline must be at least 10 "]
    },


}, {timestamps:true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;