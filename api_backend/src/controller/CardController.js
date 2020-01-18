const Card = require('../Models/CardScheema');



module.exports = {
    async index(req,res){
        const response = await Card.find();
        return res.json(response);
    },
    async store(req,res){
        const {title,description,value,date} = req.body;

        const parsedDate = new Date(date);

        const card = await Card.create({
            title,
            date:parsedDate,
            description,
            value
        });
    
        return res.json(card);
    
    }
}