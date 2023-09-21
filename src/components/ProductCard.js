import StyledProductCard from "styles/components/StyledProductCard";

// 상품 객체 하나를 받아와 카드를 만들어줌.

const ProductCard = ({product}) => {
  return (
      // 가장 바깥의 div태그에 onClick 붙여서 상세보기로 넘겨주자.

    <StyledProductCard>
      <div id="product">
        <img src="https://picsum.photos/200/300" alt="product" />
        <p>{product.name}</p>
        <p>{product.price.toLocaleString()}</p>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
