import StyledDefaultHeader from "styles/components/StyledDefaultHeader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DefaultHeader = () => {

  let isLogged = false;
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const navigateToCategory = (e) => {
    setCategory(e.target.textContent);
    navigate(`/${category}`);
  };

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToMyPage = () => {
    navigate("/mypage");
  };
  const navigateToSignIn = () => {
    navigate("/signin");
  };

  return (
    <StyledDefaultHeader>
      <div className="wrapper">
        <div className="main-component">
          {isLogged ? (
            <p>로그아웃</p>
          ) : (
            <p onClick={navigateToSignIn}>로그인</p>
          )}

          <div id="default_top">
            <span className="logo" onClick={navigateToHome}>
              #EASE
            </span>
            <form className="search-box">
              <input type="text" placeholder="검색어를 입력하세요" />
              <button id="search-btn" type="submit">
                검색
              </button>
            </form>

            <div className="my-btn">
              <span onClick={navigateToMyPage}>마이페이지</span> /{" "}
              <span>주문조회</span> / <span>장바구니</span>
            </div>
          </div>

          <ul className="category-box">
            <li onClick={navigateToCategory}>Outer</li>
            <li onClick={navigateToCategory}>Top</li>
            <li onClick={navigateToCategory}>Pants</li>
            <li onClick={navigateToCategory}>Shoes</li>
            <li onClick={navigateToCategory}>Bag</li>
            <li onClick={navigateToCategory}>Accessory</li>
          </ul>
        </div>
      </div>
    </StyledDefaultHeader>
  );
};

export default DefaultHeader;
