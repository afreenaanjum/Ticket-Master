const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const CONNECTION_URI = process.env.MONGOLAB_URI ||
    'mongodb://localhost:27017/ticket-master'

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        if (process.env.NODE_ENV === 'production') {
            console.log(process.env.MONGOLAB_URI + 'connected to DB');
        }
        console.log("Connected to Db")
    })
    .catch((err) => {
        console.log("Error connecting to Db", err)
    })

module.exports = mongoose