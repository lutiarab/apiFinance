const express = require('express');//importar a fremework express
const router = express.Router(); //Criar um roteador
const transactionsController = require('../controllers/transactionsController'); //importar o controlador

//Definir uma rota para obter todas as transações
router.get('./',transactionsController.getAllTransactions);

//Exportar o roteador 

module.exports = router;

