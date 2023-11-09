import { useState } from "react";
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

        <img src={product.img} alt="상품 이미지" />
        <div>{product.name}</div>
        <div>판매가 {product.price}원</div>
        <div>{product.description}</div>
        <button>BUY NOW</button>
        <button>ADD TO CART</button>
      </div>

      <button onClick={() => setIsDetail(true)}>상세설명 보기</button>
      <button onClick={() => setIsDetail(false)}>후기</button>
      {isDetail ? (
        <div>{product.detailInfo}</div>
      ) : (
        <div>대충 여기에 후기들이 와야한다는 뜻</div>
      )}

      <hr />
    </div>
  );
};

export default ProductDetail;
