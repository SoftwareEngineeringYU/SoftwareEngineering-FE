import { useState } from "react";

const StarRating = ({ status, callback }) => {
  // 별점 상태 추가
  const [rating, setRating] = useState(1);
  const [isEditing, setIsEditing] = useState(status);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const printStar = () => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} onClick={handleEdit}>
          ★
        </span>
      );
    }
    for (let i = 0; i < 5 - rating; i++) {
      stars.push(
        <span key={rating + i} onClick={handleEdit}>
          ☆
        </span>
      );
    }

    return stars;
  };

  if (!isEditing) {
    callback(rating);
  }

  return (
    <div>
      {/* 별점 표시 */}
      <p>별점: {rating}</p>

      {/* 별점 입력 부분 */}
      <div style={{ fontSize: "24px", cursor: "pointer" }}>
        {!isEditing
          ? printStar()
          : [1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={handleEdit}
                onMouseEnter={() => {
                  setRating(star);
                  callback(star);
                }}
                onMouseLeave={() => setRating(1)}
              >
                {star <= rating ? "★" : "☆"}
              </span>
            ))}
      </div>
    </div>
  );
};

export default StarRating;
