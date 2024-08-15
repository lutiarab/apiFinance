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
    })
}


// fução para adicionar uma nova transação -

// Com verificação de  duplicidade 

const addTransaction = (req, res) =>{
    const {date, amount, description, category, account, user_id} = req.body;
    
    //Verificar se a transação ja existe 

    db.query(
        'SELECT * FROM transactions where date =? AND  amount=? AND description=? AND category=? AND account=? AND user_id=?',
        [date, amount, description, category, account, user_id],
        (err, results) =>{
            if(err){
                console.error('Erro ao adicionar transação', err);
                res.status(500).send('Erro ao adicionar transação');
                return;
            }
            if(results.length> 0){
                //se a transação já existe
                res.status(400).send('Transação duplicada')
            }
            
            //Se a transação não existe insere 
            
            db.query(
                `INSERT INTO transactions (date, amount, description, category, account, user_id) values 
                (?,?,?,?,?,?)`,
                [date, amount, description, category, account, user_id],
                (err, results) =>{
                    if(err){
                        console.error('Erro ao adicionar transação', err);
                        results.status(500).send('Erro ao adicionar transação');
                        return;
                    }
                    res.status(201).send('Transação bem sucedida')
                }
            );
        }
    )
};

//função para atualizar uma trasação existente (substituição completa)

const updateTrasactionPut = (req, res) => {
    const{id} = req.params;
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
        'UPDATE transactions SET date=?, amount=?, description=?, category=?, account=?, user_id=? WHERE id=?',
        [date, amount, description, category, account, user_id, id],
        (err,results) => {
            if(err){
                console.error('Erro ao adicionar transação', err);
                results.status(500).send('Erro ao adicionar transção');
                return;
            }

            if(results.affectedRows===0){
                res.status(404).send('Transação não encontrada');
                return;
            }

            res.send('Transação adicionada com sucesso');
        }
       
    );
};


//função para atualizar uma trasação existente (substituição completa)
const updateTrasactionPatch = (req,res) => {
    const{id} = req.params;
    const fields = req.body;
    const query = [];
    const values = [];

    for(const[key,value] of Object.entries(fields)){
        query.push(`${key}= ?`);
        values.push(value);

    }
    values.push(id);
    db.query(
        `UPDATE transactions SET ${query.join(',')} WHERE id = ?`,
        values,
        (err,results) => {
            if(err){
                console.error('Erro ao atualizar transação', err);
                res.status(500).send('Erro ao adicionar transação');
                return;
            }

            if(results.affectedRows===0){
                res.status(404).send('Transação não encontrada');
                return;
            }

            res.send('Transação atualizada com sucesso');
        } 
    );
};


//função para delatar uma transação existente

const deleteTransactions = (req,res) =>{
const{id} = req.params;
db.query('DELETE FROM transactions WHERE id = ?',[id],
    (err,results) => {
        if(err){
            console.error('Erro ao atualizar transação', err);
            res.status(500).send('Erro ao adicionar transação');
            return;
        }

        if(results.affectedRows===0){
            res.status(404).send('Transação não encontrada');
            return;
        }

        res.send('Transação atualizada com sucesso');
    } 
);
}
module.exports = {
    getAllTransactions,
    addTransaction,
    updateTrasactionPut,
    updateTrasactionPatch,
    deleteTransactions
};