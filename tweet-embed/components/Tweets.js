import TweetEmbed from "react-tweet-embed";
import React from "react";

export default function Tweets() {
  const donaldTrump = "1347569870578266115";
  const poca = "1645343844328955904";
  const ncity = "1645111719457619968";
  return (
    <>
      <blockquote class="twitter-tweet" data-lang="ko" theme="dark">
        <p lang="ko" dir="ltr">
          just setting up my twttr
        </p>
        &mdash; Jack (@jack){" "}
        <a href="https://twitter.com/jack/status/20">March 21, 2006</a>
      </blockquote>
      <h2 style={{ textAlign: "center" }}> 저스트페이 짜응 </h2>
      <TweetEmbed
        tweetId={donaldTrump}
        options={{ width: 250, theme: "dark", align: "center" }}
        placeholder="로딩중입니당 삐용삐용"
      />
      <TweetEmbed
        tweetId={poca}
        options={{ width: 325, lang: "ko", align: "center" }}
        placeholder="로딩중입니당 삐용삐용"
      />
      <TweetEmbed
        tweetId={ncity}
        options={{ align: "center" }}
        placeholder="로딩중입니당 삐용삐용"
      />
    </>
  );
}
