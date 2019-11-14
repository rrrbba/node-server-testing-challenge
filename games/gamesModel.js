const db = require('../data/dbConfig');


module.exports = {
    insert,
    getAll,
    remove,
    findById
};

function insert(game) {
    return db('games')
    .insert(game, 'id')
    .then(ids => {
        const id = ids[0]
        return db('games')
        .where({ id })
        .first()
    });
};

function getAll() {
    return db('games')
};

function findById(id) {
    return db('games')
    .where({ id })
    .first();
};

function remove(id) {
    return findById(id)
    // .then(game => {
    //     return db('games')
        .where({ id })
        .del()

    // }) 
};