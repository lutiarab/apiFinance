//Importar a iblioteca mysql2 e criar a conexão  com o banco de dados

const mysql= require('mysql2'); // importa o pacote mysql2 para conectar

// Exibe as variáveis de ambiente carregadas
//depois pode apagar
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);

const db = mysql.createConnection({
    host:process.env.DB_HOST, // Endereço do servidor de banco de dados
    user:process.env.DB_USER, // Nome do Usuario para acessar o banco de dados
    password:process.env.DB_PASS, // Senha do usuario  para acessar o Banco de dados
    database:process.env.DB_NAME // Nome do banco de dados
});

db.connect((err) => {
    if(err) {
        console.log('Erro ao conectar ao Banco de Dados.', err); // Exibe a mensagem de Erro
    return;
    }

    console.log(`Conectado ao banco de dados ${process.env.DB_NAME}`);  // Exibe mensagem de Sucesso 
});

module.exports=db; // Exporta a conexão para ser usada em outros arquivos 