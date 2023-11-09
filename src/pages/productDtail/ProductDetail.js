import { useState } from "react";
import { ReviewBox } from "components";
// import { useParams } from "react-router-dom";

// 상품 객체를 받아옴
const ProductDetail = () => {
  const [isDetail, setIsDetail] = useState(true);

  // const { id } = useParams();
  // const product = data[id];

  return (
    <div>
      <div>
        {/* 아래 button태그는 admin일 때만 보여야함 */}
        <button>상품 수정</button>
        <button>상품 삭제</button>

        <img src="https://picsum.photos/200/300" alt="product" />
        <div>상품명</div>
        <div>판매가 100,000원</div>
        <div>따뜻하고 부드러운 안감을 사용해 더욱 포근한 후드</div>
        <button>BUY NOW</button>
        <button>ADD TO CART</button>
      </div>

      <button onClick={() => setIsDetail(true)}>상세설명 보기</button>
      <button onClick={() => setIsDetail(false)}>후기</button>
      {isDetail ? (
        <div>대충 상세설명 칸이라는 뜻</div>
      ) : (
        <div>
          대충 여기에 후기들이 와야한다는 뜻
          <ReviewBox />
          <ReviewBox />
          <ReviewBox />
        </div>
      )}

      <hr />
    </div>
  );
};

export default ProductDetail;
