const ProductCard = () => {
  const product = {
    name: "Product Name",
    price: 100000,
    image: "https://picsum.photos/200/300",
    describe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  };

  return (
    // 가장 바깥의 div태그에 onClick 붙여서 상세보기로 넘겨주자.
    <div>
      <img src="https://picsum.photos/200/300" alt="product" />
      <p>{product.name}</p>
      <p>{product.price.toLocaleString()}</p>
    </div>
  );
};

export default ProductCard;
