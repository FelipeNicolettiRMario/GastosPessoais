const {Router} = require('express');
const Card = require('./controller/CardController');
const Chart = require('./controller/ChartsController');

const router = Router();

router.get('/card',Card.index);
router.post('/card',Card.store);

router.get('/chart',Chart.index);


module.exports = router;
