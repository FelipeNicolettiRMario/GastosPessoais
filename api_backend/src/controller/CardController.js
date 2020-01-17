const Card = require('../Models/utils/PointScheema');



module.exports = {
    async index(req,res){
        const response = await Card.find();
        return res.json(response);
    },
    async store(req,res){
        const {title,description,value,date} = req.body;
        const card = await Card.create({
            title,
            date,
            description,
            value
        });
    
        return res.json(card);
    
    }
}