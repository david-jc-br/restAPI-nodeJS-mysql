const express = require('express');
const postRoutes = express.Router();
const connection = require('../connection/mysql-connection');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json(); 

postRoutes.post('/people/add', jsonParser, (req, res) => 
{
    const { first_name, last_name, email, age, gender, address } = req.body;

    connection.query('INSERT INTO People (first_name, last_name, email, age, gender, address) VALUES (?, ?, ?, ?, ?, ?)', [first_name, last_name, email, age, gender, address],(err, results) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json({
                    data: results
                });
            }
        }
    );
})

module.exports = postRoutes; 