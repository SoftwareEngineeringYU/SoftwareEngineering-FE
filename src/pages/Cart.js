import StyledCart from "styles/pages/StyledCart";
import CartProductCard from "components/CartProductCard";

const Cart = () => {
  return (
    <StyledCart>
      <div className="header">
        <div className="header__title">장바구니</div>
        <div className="header__row">
          <input type="checkbox" className="chekAll" /> 전체선택
        </div>
      </div>
      <div className="body">
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
      </div>
      <div className="footer">
        <div className="footer__row">
          <span className="sum">총 상품금액: 0원</span>
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
