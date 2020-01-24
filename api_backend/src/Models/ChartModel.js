const Card = require('../Models/CardScheema');

module.exports = {
    agregation(){
        const pipeline = [{$group:{_id:"$category",count:{$sum:1}}}];
        const model_agregate = Card.aggregate(pipeline);

        return model_agregate;
    }
}