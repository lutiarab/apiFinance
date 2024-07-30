const db = require('../config/db'); //importar a conexão com o Banco de Dados

//Função para obter todas as transações

const getAllTransactions = (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
        if(err){
            console.error('Erro ao obter transações',err)
            res.status(500).send('Erro ao obter transações');
            return;
        }
        res.json(results);
    });
};

//Função para adicionar uma nova transação

const addTransaction = (req,res) => {
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
        'INSERT INTO transactions(date, amount, description, category, account, user_id)VALUES (?,?,?,?,?,?)', 
        [date, amount, description, category, account, user_id],
        (err,results) => {
            if(err){
                console.error('Erro ao adicionar trasação', err);
                res.status(500).sent('Erro ao adicionar transção');
                return;
            }
            res.status(201).send('Transação adicionada com sucesso');
        }
    );
};

module.exports = {
    getAllTransactions,
    addTransaction
};