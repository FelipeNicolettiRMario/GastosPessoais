const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const cors  = require('cors');

const app = express();

mongoose.connect('mongodb+srv://FMARIO:Fallinginl0ve@cluster0-btx6c.mongodb.net/personal?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology: true
});

app.use(cors({origin:'http://localhost:3000'}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(routes);

app.listen(3333,()=>{
    console.log('Server started on 3333 port!');
})