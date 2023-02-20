# REST API com nodeJS e Mysql

## O QUE É [API, REST API, RESTFUL API](https://aws.amazon.com/pt/what-is/restful-api/)
```
API (Application Programming Interface) é um conjunto de regras, protocolos e ferramentas que permitem a comunicação entre diferentes sistemas de software. É uma interface que permite que aplicativos se comuniquem e compartilhem dados entre si.

Uma REST API é um tipo específico de API que segue o estilo arquitetural REST (Representational State Transfer). Ela é baseada em HTTP, e usa verbos HTTP (como GET, POST, PUT e DELETE) para representar as operações que podem ser realizadas nos recursos da API. Uma API REST é considerada RESTful quando segue as melhores práticas de design de APIs REST, como ser stateless (sem estado) e usar a hierarquia de recursos da web.
```
---

## [NODE JS](https://nodejs.org/en/download/)

Antes de tudo precismos instalar o nodejs em nossa máquina.

```
Node.js é uma plataforma de desenvolvimento de software que permite a execução de aplicativos escritos em JavaScript no lado do servidor. Ele utiliza a engine JavaScript V8 do Google Chrome para executar JavaScript no servidor. Com o Node.js, os desenvolvedores podem criar aplicativos do lado do servidor em JavaScript, o que permite uma experiência de desenvolvimento mais consistente e uma maior reutilização de código. Ele também vem com o gerenciador de pacotes npm, que permite aos desenvolvedores instalar, gerenciar e compartilhar pacotes de código com facilidade. O Node.js é usado para criar aplicativos web, APIs, aplicativos móveis, entre outros tipos de aplicativos. Ele é conhecido por ser escalável e eficiente em termos de recursos, permitindo a execução de aplicativos em tempo real e de alta performance.
```
---

## [MySQL](https://www.mysql.com/)

Esta api vai se conectar com o SGBD MySQL:

```
MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto
```

Então criamos a seguinte tabela nele:

```sql
CREATE TABLE People (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  age INT,
  gender ENUM('Male', 'Female',),
  address VARCHAR(200),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

Depois inserimos alguns dados na tabela:

```sql
INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('John', 'Doe', 'john.doe@example.com', 35, 'Male', '123 Main Street, Anytown USA');

INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('nnn', 'Doe', 'jane.doe@example.com', 32, 'Female', '456 Elm Street, Anytown USA');

INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('dff', 'ff', 'bob.smith@ff.com', 40, 'ff', '789 ff Street, Anytffown USA');

INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('Emily', 'Jones', 'emily.jones@example.com', 28, 'Female', '246 Maple Street, Anytown USA');

INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('Michael', 'Johnson', 'michael.johnson@example.com', 45, 'Male', '135 Pine Street, Anytown USA');

INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('Sara', 'Williams', 'sara.williams@example.com', 37, 'Female', '478 Cedar Street, Anytown USA');

INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('David', 'Brown', 'david.brown@example.com', 42, 'Male', '369 Birch Street, Anytown USA');

INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('Jennifer', 'Davis', 'jennifer.davis@example.com', 30, 'Female', '159 Ash Street, Anytown USA');

INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('James', 'Miller', 'james.miller@example.com', 39, 'Male', '753 Cedar Street, Anytown USA');

INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('Emily', 'Wilson', 'emily.wilson@example.com', 31, 'Female', '486 Elm Street, Anytown USA');

INSERT INTO People (first_name, last_name, email, age, gender, address)
VALUES ('ddfffr', 'fdefewvff', 'dfdf@frf.com', 41, 'male', 'rfff Elm ff, ff USA');
```
---
## INICIAR O PROJETO NODE JS 
Para iniciar o projeto digitamos no terminal(Antes abra a pasta aonde vc quer salvar o projeto):

`npm install -y`

```
O comando "npm install -y" é usado para instalar as dependências do projeto Node.js que estão listadas no arquivo "package.json", sem a necessidade de confirmar a instalação de cada dependência manualmente.
```

Para instalarmos o framework [express.js](https://developer.mozilla.org/pt-BR/docs/Learn/index-side/Express_Nodejs/Introduction) e depois o [nodemon](https://www.npmjs.com/package/nodemon)

`npm install express -s`

`npm install -g nodemon`

Iniciar nossa pasta como um repositório Git

`git init`

Criar um arquivo chamado .gitignore pelo vscode, nele colocamos `/node_modules` para ignorar essa pasta ao subirmos nosso repositório 

Obs: Criar ele na raiz da pasta

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
## 
Agora vamos instalar o pacote mysql2:

`npm install mysql2`

```
O pacote mysql2 é um módulo Node.js que fornece uma interface de programação para o banco de dados MySQL. Ele permite que você interaja com um banco de dados MySQL usando JavaScript e Node.js, executando consultas, inserindo dados, atualizando dados e muito mais.

O pacote mysql2 é uma das várias opções de módulos disponíveis para se conectar ao MySQL com Node.js, mas é considerado por muitos como uma das opções mais robustas e eficientes. Além disso, ele é compatível com a maioria das versões mais recentes do MySQL e oferece suporte a recursos avançados, como pooling de conexão, transações e gerenciamento de erros.
```

Agora para inicializar o servidor é só dar o comando abaixo no terminal: 

`node .\src\index.js`

Pronto servidor rodando. 