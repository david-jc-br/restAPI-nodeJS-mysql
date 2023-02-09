# REST API com nodeJS e Mysql

Para iniciar o projeto damos um:

`npm install -y`

Para instalarmos o framework [express.js](https://developer.mozilla.org/pt-BR/docs/Learn/index-side/Express_Nodejs/Introduction) e depois o [nodemon](https://www.npmjs.com/package/nodemon)

`npm install express -s`

`npm install -g nodemon`

Iniciar nossa pasta como um repositório Git 

`git init`

Criar um arquivo chamado .gitignore pelo vscode, nele colocamos /node_modules para ignorar essa pasta ao subirmos nosso repositório 

Obs: Criar ele na raiza da pasta

Criar um arquivo chamado index.js dentro de src e colocar o seguinte código: 

```js
const express = require('express');
const app = express();
const mysql = require('mysql2');

// Criar conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost', // exemplo
    user: 'root', // exemplo
    password: '314159',// exemplo
    database: 'peopledb' // exemplo
});

// Iniciar a conexão com o banco de dados
connection.connect();

// exemplo de uso do verbo http get
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

// porta em que nosso servidor está rodando
app.listen(3000, () => {
    console.log('Servidor rodando no endereço localhost:3000');
});
```

Agora vamos instalar o pacote mysql2:

`npm install mysql2`

Curiosidade: ´´O pacote mysql2 é um módulo Node.js que fornece uma interface de programação para o banco de dados MySQL. Ele permite que você interaja com um banco de dados MySQL usando JavaScript e Node.js, executando consultas, inserindo dados, atualizando dados e muito mais.

O pacote mysql2 é uma das várias opções de módulos disponíveis para se conectar ao MySQL com Node.js, mas é considerado por muitos como uma das opções mais robustas e eficientes. Além disso, ele é compatível com a maioria das versões mais recentes do MySQL e oferece suporte a recursos avançados, como pooling de conexão, transações e gerenciamento de erros.´´

Agora para inicializar o servidor é só dar o comando abaixo no terminal: 

`node .\src\index.js`

Pronto servidor rodando. 