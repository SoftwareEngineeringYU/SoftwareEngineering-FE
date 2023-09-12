import {
  Banner,
  DefaultHeader,
  PaginationBtn,
  ProductCard,
} from "../../components";

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
