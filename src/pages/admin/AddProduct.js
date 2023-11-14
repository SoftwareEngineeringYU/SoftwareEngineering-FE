import StyledAddProduct from "styles/pages/admin/StyledAddProduct";

const Add_product = () => {
  return (
    <StyledAddProduct>
      <div className="wrapper">
        <h1 className="title">add product</h1>
        <form className="formBox">
          <div className="inputWrapper">
            <span className="text">상품명</span>
            <input placeholder="상품명" className="productName" />
          </div>
          <div className="inputWrapper">
            <span className="text">판매가</span>
            <input
              type="number"
              placeholder="판매가"
              className="productPrice"
            />
          </div>
          <div className="inputWrapper">
            <span className="text">간단설명</span>
            <textarea placeholder="간단설명" className="productIntro" />
          </div>
          <div className="inputWrapper">
            <span className="text">상세설명</span>
            <textarea placeholder="상세설명" className="productDetail" />
          </div>
          <div className="inputWrapper">
            <span className="text">사진추가</span>
            <input type="file" className="fileInput" />
          </div>
          <button type="submit" className="submitBtn">
            완료
          </button>
        </form>
      </div>
    </StyledAddProduct>
  );
};

export default Add_product;
