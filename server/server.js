const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 4005;

const dbConnect = require('./config/db');
dbConnect();

app.use(express.json()) 

app.listen(port, () => {
    console.log("server is running at")
}) ;

app.get('/', (req, res) => {
    console.log('Hello from route')
    res.send('Hello from express')
});

app.get('/something', (req,res) => {
    res.send('Hello guys from somewhere')});



app.get("/", (req, res) => { 
    console.log("Hello from route")
    res.send("Hello from express");
     });