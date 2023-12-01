import StyledCartProductCard from "styles/components/StyledCartProductCard";
import { useNavigate } from "react-router-dom";
const CartProductCard = ({ product }) => {
  const navigate = useNavigate();
  console.log(product);
  const navigateToProduct = () => {
    navigate("/product");
  };

  return (
    <StyledCartProductCard>
      <div className="checkBox">
        <input type="checkbox" />
      </div>
      <img className="productImg" onClick={navigateToProduct} src={product.productImage}></img>
      <div className="productName">{product.productName}</div>
      <div className="productPrice">{product.productPrice}</div>
      <div className="productNumber">{product.quantity}개</div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
