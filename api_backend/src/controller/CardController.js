const Card = require('../Models/CardScheema');
const express = require('express');


module.exports = {
    async index(req,res){
        console.log('oi')
        const response = await Card.find();
        return res.json(response);
    },
    async store(req,res){
        const {title,description,value,date} = req.body;

        const parsedDate = new Date(date);
        console.log(req.body);
        const card = await Card.create({
            title,
            date,
            description,
            value
        });
    
        return res.json(card);
    
    }
}