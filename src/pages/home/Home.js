import { DefaultHeader, PaginationBtn, ProductCard } from "../../components";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <DefaultHeader />
      <Banner />
      <div>new arrivals</div>
      <ProductCard />
      <PaginationBtn totalPages={6} />
    </>
  );
};

export default Home;
