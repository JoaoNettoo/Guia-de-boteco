const express = require('express');
const router = express.Router();
const barController = require('./controllers/barController');

router.post('/bares', barController.createBar);
router.get('/bares', barController.getBars);
router.put('/bares/:id', barController.updateBar);
router.delete('/bares/:id', barController.deleteBar);

module.exports = router;