import StyledReviewBox from "styles/components/StyledReviewBox";
import { useState } from "react";

const ReviewBox = () => {
  //별점 관련 변수
  // const fullStar = 5;
  // const filledStar = review.score;
  // const emptyStar = fullStar - filledStar;

  const [review, setReview] = useState(
    "마감도 훌륭하고 핏도 좋아요! 데일리로 휘뚜루마뚜루 잘 입고 있습니다 강추"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setIsDeleted(true);
    }
  };

  if (isDeleted) {
    return null;
  }

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <StyledReviewBox>
      <div className="reviewHeader">
        <div className="header__left">
          <span className="reviewTitle">리뷰 제목</span>
          <span className="reviewWriter">리뷰 작성자</span>
        </div>
        {/* 별점을 보여주는 부분 */}
        {/* <div className="reviewStarBox"><span>
        {[...Array(filledStar)].map((_, index) => (
          <span key={index}>★</span>
        ))}
      </span> */}
      {/* <span>
        {[...Array(emptyStar)].map((_, index) => (
          <span key={index}>☆</span>
        ))}
      </span></div> */}
        <div className="reviewStarBox">★★★★★</div>
      </div>
      <div className="reviewBody">
        <div className="reviewImg">
          <img src="https://picsum.photos/200/300" alt="product" />
        </div>
        {isEditing ? (
          <textarea
            className="reviewText"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        ) : (
          <div className="reviewText">{review}</div>
        )}

        {/* {review.writer === loginUser.name ? (
        <div>
          <span>수정</span> /
          <span> 삭제</span>
        </div>
      ) : null} */}
      </div>
      <div className="reviewFooter">
        {isEditing ? (
          <span onClick={handleEdit}>완료</span>
        ) : (
          <span onClick={handleEdit}>수정</span>
        )}
        /<span onClick={handleDelete}>삭제</span>
      </div>
    </StyledReviewBox>
  );
};

export default ReviewBox;
