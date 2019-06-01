
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {id: 1, text: '123', completed:true,},
        {id: 2, text: 'dwidjw', completed:true,}
      ]);
    });
};
