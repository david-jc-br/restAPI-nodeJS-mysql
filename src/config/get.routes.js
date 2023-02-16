const express = require('express');
const getRoutes = express.Router();
const connection = require('../connection/mysql-connection');

getRoutes.get('/people/:id', (req, res) => {
    const id = req.params.id;

    connection.query(
        'SELECT * FROM people WHERE id = ?',
        [id],
        (error, results) => {
            if (error) {
                return res.send(error);
            } else {
                return res.json({
                    data: results
                });
            }
        }
    );
});

getRoutes.get('/people', (req, res) => {
    connection.query(
        'SELECT * FROM people',
        (error, results) => {
            if (error) {
                return res.send(error);
            } else {
                return res.json({
                    data: results
                });
            }
        }
    );
});

module.exports =  getRoutes;