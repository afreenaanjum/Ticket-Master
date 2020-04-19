const express = require('express')
const mongoose = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')

const app = express()
const port = process.env.PORT3005 || 3005;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json())
app.use(cors())
app.use('/', router)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});



app.listen(port, () => {
	console.log('listening to the port', port)
}) 
