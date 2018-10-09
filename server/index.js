require('dotenv').config();
const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    massive = require('massive'),
    cors = require('cors');
    controller = require(__dirname+'/controller.js');

app.use(cors);
app.use(bodyParser.json());



const port = process.env.SERVER_PORT;

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db',db);

    app.listen(port, ()=>{
        console.log(`Listening on ${port}`)
    });
}).catch(err=>{
    console.log(`Error connecting to database`, err.message)
})

