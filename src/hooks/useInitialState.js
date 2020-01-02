import { useState, useEffect } from 'react';

const useInitialState = (url, postsNumber, intervalTime) => {
  /*   if (url === null) {
    console.log('URL is null')
    return
  } */
  const [tweets, setTweets] = useState([]);
  var t = [];
  useEffect(() => {
    var interval = setInterval(() => {
      console.log(`interval: ${intervalTime} posts: ${postsNumber}`);
      fetch(url)
        .then(response => response.json())
        .then(data => setTweets(data));
    }, intervalTime);
    return () => clearInterval(interval);
/*     setTimeout(() => {
      console.log(`interval: ${intervalTime} posts: ${postsNumber}`);
      fetch(url)
        .then(response => response.json())
        .then(data => setTweets(data))
    }, intervalTime);  */
  });
  t = tweets.slice(0, postsNumber);

  return t;
};

export default useInitialState;
