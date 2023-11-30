import { PaginationBtn } from "components";
import { ProductCard } from "components";
import StyledCategory from "styles/pages/StyledCategory";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const { categoryName } = useParams();
  const onClickHandler = () => {
    navigate(`/add_product`);
  };

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get(`https://greencart.one/sapi/api/v1/products/category/${categoryName}?page=0&size=5&sort=name,desc`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProducts();
  },[]);

  return (
    <StyledCategory>
      <div className="wrapper">
        <p className="categoryName">{categoryName}</p>
        <div className="productsBox">
          <div className="sorting">
            {/* <div className="sortingMethods">
              <p>최신순</p> | <p>인기순</p> | <p>높은가격순</p> |{" "}
              <p>낮은가격순</p>
            </div> */}
            <button className="addProductBtn" onClick={onClickHandler}>상품등록</button>
          </div>
          <div className="productCardWrapper">
            {products.map((sample) => (
              <ProductCard product={sample} key={sample.id}/>
            ))}
          </div>
        </div>
        <PaginationBtn totalPages={1} />
      </div>
    </StyledCategory>
  );
};

export default Category;
