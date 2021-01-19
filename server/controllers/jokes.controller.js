const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req,res) => {//read all jokes 
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "something went wrong", error: err}));

};


module.exports.findJoke = (req,res) => {// read one joke 
    Joke.findOne({_id: req.params.id})
        .then(OneJoke => res.json({joke: OneJoke}))
        .catch(err => res.json({message: "something went wrong", error:err}));

}

module.exports.createJoke = (req,res) => {// make a new joke
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "something went wrong", error:err}));

    }



module.exports.updateJoke = (req,res) => {//update a existing joke 
    Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
}


module.exports.deleteJoke=(req,res) =>{/// delete an existing joke 
    Joke.deleteOne({_id: req.params._id})
        .then(result => res.json({ result: result }))
        .catch(err => res.json({message: "Something went wrong", error: err}))
    }
