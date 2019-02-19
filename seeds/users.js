exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "bob" },
        { id: 2, username: "tim" },
        { id: 3, username: "tom" }
      ]);
    });
};
