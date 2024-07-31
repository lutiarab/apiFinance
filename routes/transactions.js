const express = require('express');//importar a fremework express
const router = express.Router(); //Criar um roteador
const transactionsController = require('../controllers/transactionsController'); //importar o controlador

//Definir uma rota para obter todas as transações

router.get('/',transactionsController.getAllTransactions);


//Definindo uma rota para adicionar uma nova transação

router.post('/',transactionsController.addTransaction);


//Definindo uma rota para atualizar uma trasação existente(substituição completa)

router.put('/:id', transactionsController.updateTrasactionPut);

//Definindo uma rota para atualizar uma trasação existente(substituição completa)

router.patch('/:id', transactionsController.updateTrasactionPatch);


//Exportar o roteador 

module.exports = router;

