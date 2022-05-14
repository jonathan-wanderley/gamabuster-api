const express = require('express');
const GeneroController = require('../controllers/genero');
const FilmeController = require('../controllers/filme');
const ReservaController = require('../controllers/reserva');
const ClientesController = require('../controllers/cliente');

const router = express.Router();

//Rotas Genero
router.get('/generos', GeneroController.getAll);
router.get('/generos/:id', GeneroController.getById);
router.post('/generos', GeneroController.create);
router.put('/generos/:id', GeneroController.update); 
router.delete('/generos/:id', GeneroController.delete);

//Rotas Filme
router.get('/filmes', FilmeController.getAll);
router.get('/filmes/:id', FilmeController.getById);
router.post('/filmes', FilmeController.create);
router.put('/filmes/:id', FilmeController.update); 
router.delete('/filmes/:id', FilmeController.delete);

//Rotas Reserva
router.get('/reservas', ReservaController.getAll);
router.get('/reservas/:id', ReservaController.getById);
router.post('/reservas', ReservaController.create);
router.put('/reservas/:id', ReservaController.update); 
router.delete('/reservas/:id', ReservaController.delete);

//Rotas Reserva
router.get('/clientes', ClientesController.getAll);
router.get('/clientes/:id', ClientesController.getById);
router.post('/clientes', ClientesController.create);
router.put('/clientes/:id', ClientesController.update); 
router.delete('/clientes/:id', ClientesController.delete);

module.exports = router;