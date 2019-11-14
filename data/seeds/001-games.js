
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        { name: 'KH1' },
        { name: 'KH2' },
        { name: 'KH3' }
      ]);
    });
};
