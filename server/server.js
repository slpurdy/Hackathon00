const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();
require('dotenv').config();

const app = express();

app.use(cors());

let langs = [];

app.get('/', (req, res) => {
    res.send('Hello User\n' + 'there are ' + langs.length + ' langs');
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
        res.send(lang[req.query.index]);
    } else {
        res.send('No Update was made');
    }
    //localhost:3001/?lang=c++&index=0
    
});

app.delete('/', (req, res) => {
    
});

app.listen(3001, ()=>{
    console.log('http://localhost:3001')
})
