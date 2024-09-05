const express = require('express'); // Importa o framework Express 
const router = express.Router(); // Cria um novo roteador 
const authController = require('../controllers/authController'); // Importa o controlador de autenticação
 
// Rota para registro de usuário 
router.post('/register', authController.registerUser); 

// Rota para login de usuário 
router.post('/login', authController.loginUser); 

module.exports = router; // Exporta o roteador 