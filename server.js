//Importar as Bibliotecas

const express = require('express'); //importa o framework Express
const dotenv = require('dotenv'); //importa o pacote dotenv para gerenciar variáveis de ambiente
const cors = require('cors'); //importa o pacote cors para permitir requisiçoes de diferentes origens
const bodyParser = require('body-parser'); //importa o pacote body-parser para analisar o corpo das requisiçoes HTTP

//Configurar as Variáveis de ambiente

dotenv.config(); // Carrega as variáveis definidas no arquivo '.env' para process.env(processos)


//inicializar nova aplicação Express

const app = express(); 


//configurar o CORS e o bady-Parse

app.use(cors()); //habilita o cors para todas as rotas
app.use(bodyParser.json()); // configura o body-parser para analisar requisições JSON


//Rota inicial para testar o servidor

app.get('/',(req, res)=> {
    res.send("Servidor está rodando"); //difinir uma rota para testar o servidor
});

//Configurar o servidor para uma porta específica

const PORT = process.env.PORT || 3000; // Define a porta a partir da variavel de ambiente ou usa a porta 3000 como padrão
app.listen(PORT,()=> {
    console.log(`Servidor rodadndo na porta  ${PORT}`); //Envia uma mensagem informando que o servidor esta rodando na '$PORT' em que estiver no momento
});