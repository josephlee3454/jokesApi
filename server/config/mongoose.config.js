const mongoose = require('mongoose')

mongoose.connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("database is a connection"))
.catch(() => console.log("There was an issue connecting to the database", err));

