const mongo = require('mongoose');

const Card = mongo.Schema({
    title:String,
    date:Date,
    description:String,
    value:Number

});

module.exports = mongo.model("Card",Card);