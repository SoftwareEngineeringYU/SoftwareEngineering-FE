import StyledCart from "styles/pages/StyledCart";
import CartProductCard from "components/CartProductCard";
import axios from "axios";
import { useState, useEffect } from "react";

const Cart = () => {

  const [products, setProducts] = useState([]);
  const [cost, setCost] = useState(0);
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    const getCart = async () => {
      await axios
        .get("https://greencart.one/sapi/api/v1/carts", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          setProducts(res.data.data.products);
          setCost(res.data.data.totalPrice);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getCart();
  }, []);

  return (
    <StyledCart>
      <div className="header">
        <div className="header__title">장바구니</div>
        <div className="header__row">
          <input type="checkbox" className="chekAll" /> 전체선택
        </div>
      </div>
      <div className="body">
        {
          (products.length === 0) ? <div className="emptyCart">장바구니가 비어있습니다.</div> : products.map((product) => {
            return <CartProductCard key={product.id} product={product} />;
          })
        }
        {/* <CartProductCard />
        <CartProductCard />
        <CartProductCard />
        {
          products.map((product) => {
            return <CartProductCard key={product.id} product={product} />;
          })
        } */}
      </div>
      <div className="footer">
        <div className="footer__row">
          <span className="sum">총 상품금액: {cost}원</span>
        </div>
        <div className="deleteBtn__wrapper">
          <button className="deleteSelectedBtn">선택상품 삭제</button>
          <button className="deleteAllBtn">전체 삭제</button>
        </div>
        <div className="footer__orderBtnWrapper">
          <button className="orderAllBtn">전체 주문하기</button>
          <button className="orderSelectedBtn">선택 상품 주문하기</button>
        </div>
      </div>
    </StyledCart>
  );
};

export default Cart;
