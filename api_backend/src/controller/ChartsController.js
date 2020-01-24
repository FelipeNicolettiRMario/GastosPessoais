const model = require('../Models/ChartModel');

module.exports = {
    async index(req,res){

        const query = await model.agregation();

        return res.json(query);

    }

}