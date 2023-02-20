const cors = require('cors');
const express = require('express'); // importa o módulo do framework 
const https = require('https');
const fs = require('fs');
const get_Routes = require('./config/get.routes');
const delete_routes = require( './config/delete.routes');
const postRoutes = require('./config/post.routes');
const putRoutes = require('./config/put.routes.js')

const app = express(); // cria uma instância do servidor web do Express.js para tratarmos de 
app.use(cors()); 
app.use(get_Routes, delete_routes, postRoutes, putRoutes); // ultiliza as rotas, midllewares entre outro criados

const options = {
    key: fs.readFileSync('../src/SSL/code.key'),
    cert: fs.readFileSync('../src/SSL/code.crt')
};

https.createServer(options, app)
    .listen(3001, () => {
        console.log('Express started at https://localhost:3001');
    });
