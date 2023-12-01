import { PaginationBtn, ProductCard } from "../../components";
import { Banner } from "./Banner";
import StyledHome from "styles/pages/home/StyledHome";
import axios from "axios";
import { useState, useEffect } from "react";
import axiosInstance from "axiosInstance";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await axiosInstance
        .get("/products")
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
