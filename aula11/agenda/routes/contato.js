const express = require('express');
const router = express.Router();

// Importa o controller
const contatoController = require('../controllers/contatoController');

router.get('/', contatoController.contatosList);
router.get('/:id', contatoController.contatosRead);
router.post('/', contatoController.contatosCreate);
router.patch('/:id', contatoController.contatosUpdate);
router.delete('/:id', contatoController.contatosDelete);

module.exports = router;
