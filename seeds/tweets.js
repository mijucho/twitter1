exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tweets")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tweets").insert([
        { id: 1, text: "Hi I am bob", tweeted_at: 1550545368054, user_id: 1 },
        { id: 2, text: "Hi I am tim", tweeted_at: 1550545416606, user_id: 2 },
        { id: 3, text: "Hi I am tom", tweeted_at: 1550545432764, user_id: 3 }
      ]);
    });
};
