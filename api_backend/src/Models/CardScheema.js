const mongo = require('mongoose');

const Card = mongo.Schema({
    title:String,
    date:String,
    description:String,
    value:Number

});

module.exports = mongo.model("Card",Card);