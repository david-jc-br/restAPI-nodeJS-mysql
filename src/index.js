const express = require('express');
const app = express();
const mysql = require('mysql2');

// Criar conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '314159',
    database: 'peopledb'
});

// Iniciar a conexão com o banco de dados
connection.connect();

app.get('/people', (req, res) => {
  // Executar uma consulta SQL
    connection.query('SELECT * FROM People', (error, results) => {
        if (error) {
            return res.send(error);
        } else {
            return res.json({
                data: results
            });
        }
    });
});

app.delete("/people/:id", (req, res) => {
    const id = req.params.id;
    
    // Preparar consulta de exclusão
    const sql = "DELETE FROM People WHERE id = ?";
    
    // Executar consulta
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Erro ao executar consulta: " + err);
            res.status(500).send("Erro ao excluir pessoa");
            return ;
        }

        res.send(`Pessoa com ID ${id} excluído com sucesso`);
    });
});

app.put("/people/:id", (req, res) => {
    const id = req.params.id;
    const novosDados = req.body;
    
    // Preparar consulta de atualização
    const sql = "UPDATE People SET ? WHERE id = ?";
    
    // Executar consulta
    connection.query(sql, [novosDados, id], (err, result) => {
        if (err) {
            console.error("Erro ao executar consulta: " + err);
            res.status(500).send("Erro ao atualizar Pessoa");
            return;
        }
        res.send(`Pessoa com ID ${id} atualizado com sucesso`);
    });
});

app.post("/people", (req, res) => {
    //const values = [req.body.firt_name, req.body.last_name, req.body.email, req.body.age, req.body.gender, req.body.address];

    const values = ['Jane', 'Doe', 'jane.doe@example.com', 32, 'Female', '456 Elm Street, Anytown USA'];

    const sql = "INSERT INTO People (first_name, last_name, email, age, gender, address) " + "VALUES (?, ?, ?, ?, ?, ?);";
    
    // Inserir os dados do recurso no banco de dados
    connection.query(sql, values, (erro, resultado) => {
        if (erro) {
            res.send("Erro ao inserir o Pessoa no banco de dados " + erro);
        } else {
            res.send("Pessoa inserida com sucesso");
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando no endereço localhost:3000');
});
