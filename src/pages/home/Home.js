import { DefaultHeader, PaginationBtn, ProductCard } from "../../components";
import { Banner } from "./Banner";
import sampleProductList from "../../assets/sampleProductList.json"
import StyledHome from "styles/pages/home/StyledHome";


const Home = () => {
  return (
    <StyledHome>
      <div>
        <DefaultHeader />
        <Banner />
        <div id="home-wrapper">
          <div id="new">new arrivals</div>
          <br></br>
          <div id="product-wrapper">
            <ProductCard product={sampleProductList[0]}/>
            <ProductCard product={sampleProductList[1]}/>
            <ProductCard product={sampleProductList[2]}/>
            <ProductCard product={sampleProductList[3]}/>
            <ProductCard product={sampleProductList[4]}/>
            <ProductCard product={sampleProductList[5]}/>
            <ProductCard product={sampleProductList[6]}/>
            <ProductCard product={sampleProductList[7]}/>
            <ProductCard product={sampleProductList[8]}/>
            <ProductCard product={sampleProductList[9]}/>
          </div>
        </div>
        <PaginationBtn totalPages={6} />
      </div>
    </StyledHome>
  );
};

export { Home };
