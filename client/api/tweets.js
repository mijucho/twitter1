export function getTweets() {
  return request.get("/api/v1/tweets").then(tweets => {
    dispatch(saveTweets(tweets));
  });
}
