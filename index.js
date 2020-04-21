const express = require('express')
const mongoose = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
const path = require('path');

const app = express()


app.use(express.json())
app.use(cors())
app.use('/', router)


app.use(express.static(path.join(__dirname, 'client/build')));

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


const port = process.env.PORT || 3005;
app.listen(port, () => {
	console.log('listening to the port', port)
}) 
