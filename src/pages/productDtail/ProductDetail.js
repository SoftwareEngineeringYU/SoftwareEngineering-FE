import { useState } from "react";
import { ReviewBox } from "components";
import StyledProductDetail from "styles/pages/productDetail/StyledProductDetail";
// import { useParams } from "react-router-dom";

// 상품 객체를 받아옴
const ProductDetail = () => {
  const [isDetail, setIsDetail] = useState(true);

  // const { id } = useParams();
  // const product = data[id];

  return (
    <StyledProductDetail>
      <div className="header">
        {/* 아래 button태그는 admin일 때만 보여야함 */}
        <button className="admin_modifyBtn">상품 수정</button>
        <button className="admin_deleteBtn">상품 삭제</button>

        <img
          src="https://picsum.photos/200/300"
          alt="product"
          className="productImg"
        />
        <div className="productName">상품명</div>
        <div className="productPrice">판매가 100,000원</div>
        <div className="productIntro">
          따뜻하고 부드러운 안감을 사용해 더욱 포근한 후드
        </div>
        <button className="buyBtn">BUY NOW</button>
        <button className="cartBtn">ADD TO CART</button>
      </div>
      <div className="body">
        <div className="stateBtn">
          <button onClick={() => setIsDetail(true)}>상세설명 보기</button>
          <button onClick={() => setIsDetail(false)}>후기</button>
        </div>
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
      </div>
      <hr />
    </StyledProductDetail>
  );
};

export default ProductDetail;
