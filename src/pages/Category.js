import { PaginationBtn } from "components";
import { ProductCard } from "components";
import StyledCategory from "styles/pages/StyledCategory";
import { useNavigate } from "react-router-dom";

//카테고리에 속한 상품들의 배열을 받아옴.
//이 배열을 ProductCard에 매핑해줌.

const Category = ({ selectedCategory }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/add_product`);
  };

  return (
    <StyledCategory>
      <div className="wrapper">
        <p className="categoryName">category name</p>
        <div className="productsBox">
          <div className="sorting">
            <div className="sortingMethods">
              <p>최신순</p> | <p>인기순</p> | <p>높은가격순</p> |{" "}
              <p>낮은가격순</p>
            </div>
            <button className="addProductBtn" onClick={onClickHandler}>상품등록</button>
          </div>
          <div className="productCardWrapper">
            {selectedCategory.map((sample) => (
              <ProductCard product={sample} />
            ))}
          </div>
        </div>
        <PaginationBtn totalPages={1} />
      </div>
    </StyledCategory>
  );
};

export default Category;
