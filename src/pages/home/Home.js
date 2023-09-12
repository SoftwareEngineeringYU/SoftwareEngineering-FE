import { DefaultHeader, PaginationBtn, ProductCard } from "../../components";
import { Banner } from "./Banner";
import sampleProductList from "../../assets/sampleProductList.json"

const Home = () => {
  return (
    <div>
      <DefaultHeader />
      <Banner />
      <div>new arrivals</div>
      <ProductCard product={sampleProductList[0]}/>
      <PaginationBtn totalPages={6} />
    </div>
  );
};

export { Home };
