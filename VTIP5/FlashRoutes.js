const express = require('express');
const router = express.Router();
const flashController = require('../controllers/flashController');

router.get('/warranty/:months', flashController.getByWarranty);
router.delete('/warranty/:months', flashController.deleteByWarranty);

module.exports = router;