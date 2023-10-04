import React from "react";
import { ReviewBox } from "components";

const review = {
  title: "써보니 나쁘지 않은 듯",
  writer: "김철수",
  score: 4,
  body: "생각보다 키감이 좋고 소음도 적네요. 사무실에서 써도 괜찮은 키보드 입니당!",
};

const user = {
  name: "김철수",
  email: "asdf.com",
};



function App() {
  return (
    <>
      <ReviewBox review={review} loginUser={user} />
    </>
  );
}

export default App;
