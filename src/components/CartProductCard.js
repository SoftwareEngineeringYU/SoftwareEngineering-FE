import StyledCartProductCard from "styles/components/StyledCartProductCard";
import { useNavigate } from "react-router-dom";
const CartProductCard = () => {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate("/product");
  };

  return (
    <StyledCartProductCard>
      <div className="checkBox">
        <input type="checkbox" />
      </div>
      <div className="productImg" onClick={navigateToProduct} >상품 이미지</div>
      <div className="productName">상품명</div>
      <div className="productPrice">100000 원</div>
      <div className="productNumber">1개</div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
