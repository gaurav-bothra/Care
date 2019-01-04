let express = require('express')
let bodyParser = require('body-parser')

let Patient = require('./models/Patient')

require('dotenv').config()

let db = require('./config/dbConfig')

let app = express()


//Routes
app.get('/', (req ,res) => {
    res.send('App is working');
});

app.listen(process.env.SERVER_PORT, (req, res) => {
    console.log(`App is running at port ${process.env.SERVER_PORT}`)
});