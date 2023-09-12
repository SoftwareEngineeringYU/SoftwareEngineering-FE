import { DefaultHeader, PaginationBtn } from "components";
import {ProductCard} from "components";

//카테고리에 속한 상품들의 배열을 받아옴.
//이 배열을 ProductCard에 매핑해줌.

const Category = ({ selectedCategory }) => {
  return (
    <div>
      <p>category name</p>
      <div>
        <p>정렬하기</p>
        <p>최신순</p> | <p>인기순</p> | <p>높은가격순</p> | <p>낮은가격순</p>
        {selectedCategory.map((sample) => (
          <ProductCard product={sample} />
        ))}
      </div>
      <PaginationBtn totalPages={1} />
    </div>
  );
};

export default Category;
