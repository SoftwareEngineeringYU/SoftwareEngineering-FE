const ReviewBox = ({ review, loginUser }) => {
  //별점 관련 변수
  const fullStar = 5;
  const filledStar = review.score;
  const emptyStar = fullStar - filledStar;


  return (
    <div>
      <span>{review.title}</span>
      <span>{review.writer}</span>
      {/* 별점을 보여주는 부분 */}
      <span>
        {[...Array(filledStar)].map((_, index) => (
          <span key={index}>★</span>
        ))}
      </span>
      <span>
        {[...Array(emptyStar)].map((_, index) => (
          <span key={index}>☆</span>
        ))}
      </span>
      <div>{review.body}</div>
      {review.writer === loginUser.name ? (
        <div>
          <span>수정</span> /
          <span> 삭제</span>
        </div>
      ) : null}
    </div>
  );
};

export default ReviewBox;
