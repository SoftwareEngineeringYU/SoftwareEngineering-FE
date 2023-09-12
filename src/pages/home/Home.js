<<<<<<< HEAD
import { DefaultHeader, PaginationBtn, ProductCard } from "../../components";
import Banner from "./Banner";
=======
import {
  Banner,
  DefaultHeader,
  PaginationBtn,
  ProductCard,
} from "../../components";
>>>>>>> feature/homePage

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
