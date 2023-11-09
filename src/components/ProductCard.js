import StyledProductCard from "styles/components/StyledProductCard";
import { useNavigate } from "react-router-dom";

// 상품 객체 하나를 받아와 카드를 만들어줌.

const ProductCard = ({product}) => {

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/product/${product.id}`);
  }

  return (
    // 가장 바깥의 div태그에 onClick 붙여서 상세보기로 넘겨주자.
    <StyledProductCard onClick={onClickHandler}>
      <div class="product">
        <img src="https://picsum.photos/200/300" alt="product" />
        <p>{product.name}</p>
        <p>{product.price.toLocaleString()}</p>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
