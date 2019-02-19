const connection = require("./connection");

function getTweets(testDb) {
  const db = testDb || connection;

  return db("tweets")
    .join("users", "tweets.user_id", "users.id")
    .select("*", "tweets.id AS id")
    .then(tweets => {
      return tweets.map(tweet => {
        tweet.user = {
          id: tweet.user_id,
          username: tweet.username
        };
        delete tweet.user_id;
        delete tweet.username;
        return tweet;
      });
    });
}

function createTweet(tweet, testDb) {
  const db = testDb || connection;

  return db("tweet").insert(tweet);
}

function getTweetsByUsername(username, testDb) {
  const db = testDb || connection;

  return db("users")
    .where("username", username)
    .first()
    .then(tweets => {
      return tweets.map(tweet => {
        tweet.user = {
          id: tweet.user_id,
          username: user.username
        };

        delete tweet.user_id;
        return tweet;
      });
    });
}

module.exports = {
  getTweets,
  getTweetsByUsername,
  createTweet
};
