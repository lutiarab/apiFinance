const express= require('express'); // Importar a framework express
const router = express.Router(); //Criar um roteador
const transactionsController = require('../controllers/transactionsController'); // Importa o controlador 

const authMiddleware = require('../middlewares/authMiddleware'); // Importa o middleware de autenticação 


// Definindo uma rota para obter todas as transações
router.get('/', authMiddleware, transactionsController.getAllTransactions);

//Definindo uma rota para adicionar uma nova transação
router.post('/', authMiddleware, transactionsController.addTransaction);

//Definindo uma rota para atualizar uma trasação existente(substituição completa)
router.put('/:id', authMiddleware, transactionsController.updateTransactionPut);

//Definindo uma rota para atualizar uma trasação existente(substituição parcial)
router.patch('/:id', authMiddleware, transactionsController.updateTransactionPatch);

//Definindo uma rota para deletar uma transação
router.delete('/:id', authMiddleware, transactionsController.deleteTransactions);

//Exportando o roteador

module.exports = router;