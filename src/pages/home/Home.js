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
        <div>new arrivals</div>
        <ProductCard product={sampleProductList[0]}/>
        <PaginationBtn totalPages={6} />
      </div>
    </StyledHome>
  );
};

export { Home };
