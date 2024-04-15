const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();
require('dotenv').config();

const app = express();

app.use(cors());

let langs = [];

app.get('/', (req, res) => {
    res.send('Hello User\n' + 'there are ' + langs.length + ' langs\n' + langs[0]);
});

app.post('/', (req, res) => {
    if (req.query.lang) {
        langs.push(req.query.lang);
    }
    res.send(langs);
});

app.put('/', (req, res) => {
    if (req.query.index && req.query.lang) {
        langs[req.query.index] = req.query.lang;
        res.send(langs[req.query.index]);
    } else {
        res.send('No Update was made');
    }
    //localhost:3001/?lang=c++&index=0
    
});

//API stands for ????
app.delete('/', (req, res) => {
    if (req.query.index) {
        langs[req.query.index] = undefined;
        res.send(req.query.index + ' was removed');
    } else {
        res.send('Nothing was removed. Send an index');
    }
});

app.listen(3001, ()=>{
    console.log('http://localhost:3001')
})
