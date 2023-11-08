const ReviewBox = () => {
  //별점 관련 변수
  const fullStar = 5;
  const filledStar = review.score;
  const emptyStar = fullStar - filledStar;

  return (
    <div>
      <span>리뷰 제목</span>
      <span>작성자</span>
      {/* 별점을 보여주는 부분 */}
      {/* <span>
        {[...Array(filledStar)].map((_, index) => (
          <span key={index}>★</span>
        ))}
      </span> */}
      {/* <span>
        {[...Array(emptyStar)].map((_, index) => (
          <span key={index}>☆</span>
        ))}
      </span> */}
      <span>별점</span>
      <div>리뷰 내용</div>
      {/* {review.writer === loginUser.name ? (
        <div>
          <span>수정</span> /
          <span> 삭제</span>
        </div>
      ) : null} */}
      <span>수정</span>
      <span>삭제</span>
    </div>
  );
};

export default ReviewBox;
