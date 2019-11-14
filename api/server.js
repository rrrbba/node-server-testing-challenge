const express = require('express');

const Games = require('../games/gamesModel');

const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.status(200).json({ greet: 'hello' });
})

server.get('/games', (req, res) => {
    Games.getAll()
    .then(games => {
        res.status(200).json(games)
    })
    .catch(err => {
        res.status(500).json(err)
    });
});

module.exports = server;