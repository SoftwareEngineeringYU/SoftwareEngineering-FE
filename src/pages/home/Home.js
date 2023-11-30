import { PaginationBtn, ProductCard } from "../../components";
import { Banner } from "./Banner";
import StyledHome from "styles/pages/home/StyledHome";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("https://greencart.one/sapi/api/v1/products", {
          withCredentials: true,
        })
        .then((res) => {
          setProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProducts();
  }, []);

  return (
    <StyledHome>
      <div>
        <Banner />
        <div id="home-wrapper">
          <div id="new">new arrivals</div>
          <br></br>
          <div id="product-wrapper">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
        {/* <PaginationBtn totalPages={6} /> */}
      </div>
    </StyledHome>
  );
};

export { Home };
