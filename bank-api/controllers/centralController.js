const express = require('express');
const router = express.Router();
const centralController = require('../controllers/centralController');

// Insertar una nueva central
router.post('/centrals', centralController.insertCentral);

// Obtener todas las centrales
router.get('/centrals', centralController.getAllCentrals);

module.exports = router;