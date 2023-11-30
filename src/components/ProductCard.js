import StyledProductCard from "styles/components/StyledProductCard";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <StyledProductCard onClick={onClickHandler}>
      <div className="product">
        <img src={product.imageUrl} alt="product" />
        <p>{product.name}</p>
        <p>{product.price.toLocaleString()}</p>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
