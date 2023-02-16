const express = require('express');
const deleteRoutes = express.Router();
const connection = require('../connection/mysql-connection');

deleteRoutes.delete('/people/delete/:id', (req, res) => {
    const id = req.params.id;

    connection.query(
        'DELETE FROM people WHERE id = ?',
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
})

module.exports =  deleteRoutes;