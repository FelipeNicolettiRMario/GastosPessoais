const {Router} = require('express');
const Card = require('./controller/CardController')

const router = Router();

router.get('/card',Card.index);
router.post('/card',Card.store);

module.exports = router;
