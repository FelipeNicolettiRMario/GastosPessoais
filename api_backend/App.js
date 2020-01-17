const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();

mongoose.connect('mongodb+srv://FMARIO:Fallinginl0ve@cluster0-btx6c.mongodb.net/personal?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3000,()=>{
    console.log('Server started on 3000 port!');
})