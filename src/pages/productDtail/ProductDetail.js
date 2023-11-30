import { useState, useEffect } from "react";
import { ReviewBox } from "components";
import StyledProductDetail from "styles/pages/productDetail/StyledProductDetail";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

// 상품 객체를 받아옴
const ProductDetail = () => {
  const [isDetail, setIsDetail] = useState(true);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { productId } = useParams();

  const onClickProductDelete = () => {
    if (window.confirm("상품을 삭제하시겠습니까?")) {
      alert("상품이 삭제되었습니다.");
      navigate("/");
    }
  };

  useEffect(() => {
    const productView = async () => {
      await axios
        .get(`https://greencart.one/sapi/api/v1/products/${productId}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setProduct(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    productView();
  }, []);

  const addToCart = async () => {
    await axios
      .post(
        "https://greencart.one/sapi/api/v1/carts",
        {
          productId: productId,
          quantity: 1,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        alert("장바구니에 추가되었습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <StyledProductDetail>
      <div className="header">
        {/* 아래 button태그는 admin일 때만 보여야함 */}
        <button className="admin_modifyBtn">상품 수정</button>
        <button className="admin_deleteBtn" onClick={onClickProductDelete}>
          상품 삭제
        </button>

        <img src={product.imageUrl} alt="product" className="productImg" />
        <div className="productName">{product.name}</div>
        <div className="productPrice">판매가 {product.price}원</div>
        {/* <div className="productIntro">
          따뜻하고 부드러운 안감을 사용해 더욱 포근한 후드
        </div> */}
        <button className="buyBtn">BUY NOW</button>
        <button className="cartBtn" onClick={addToCart}>ADD TO CART</button>
      </div>
      <hr />
      <div className="body">
        <div className="stateBtn">
          <button onClick={() => setIsDetail(true)}>상세설명 보기</button>
          <button onClick={() => setIsDetail(false)}>후기</button>
        </div>
        {isDetail ? (
          <div>
            <img src={product.imageUrl} />
          </div>
        ) : (
          <div>
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
