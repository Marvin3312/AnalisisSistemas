const express = require('express');
const router = express.Router();
const db = require('../db/db'); // Asegúrate de importar db.js correctamente

// Ruta para crear una nueva central
router.post('/centrals', async (req, res) => {
  const { name, address, phone, email } = req.body;
  try {
    const result = await db.createCentral(name, address, phone, email);  // Usando la función definida en db.js
    res.status(201).json({ message: 'Central creada exitosamente', data: result });
  } catch (error) {
    console.error('Error al crear central:', error);
    res.status(500).json({ message: 'Error al crear central' });
  }
});
// Ruta para obtener todas las centrales
router.get('/centrals', async (req, res) => {
  try {
    const result = await db.getAllCentrals();  // Usando la función importada desde db.js
    res.status(200).json({ data: result });
  } catch (error) {
    console.error('Error al obtener centrales:', error);
    res.status(500).json({ message: 'Error al obtener centrales' });
  }
});

// Ruta para obtener una central por ID
router.get('/centrals/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.getCentralById(id);
    if (result) {
      res.status(200).json({ data: result });
    } else {
      res.status(404).json({ message: 'Central no encontrada' });
    }
  } catch (error) {
    console.error('Error al obtener central:', error);
    res.status(500).json({ message: 'Error al obtener central' });
  }
});

module.exports = router;
