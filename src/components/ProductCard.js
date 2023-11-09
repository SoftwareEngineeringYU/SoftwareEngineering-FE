import StyledProductCard from "styles/components/StyledProductCard";
import { useNavigate } from "react-router-dom";

// 상품 객체 하나를 받아와 카드를 만들어줌.

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // 나중에 배포되면 상품 id값을 받아와서 상세보기로 넘겨줘야함.
  // const onClickHandler = () => {
  //   navigate(`/product/${product.id}`);
  // }

  // 일단은 임시로 대충 화면만 볼 수 있게 해놓음.
  const onClickHandler = () => {
    navigate(`/product`);
  };

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
