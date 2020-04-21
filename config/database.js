const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://anjumafreena:Copycat12@ticket-master-9isr6.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to Db")
    })
    .catch((err) => {
        console.log("Error connecting to Db", err)
    })

module.exports = mongoose