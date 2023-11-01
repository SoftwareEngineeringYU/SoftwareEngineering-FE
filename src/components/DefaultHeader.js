import StyledDefaultHeader from "styles/components/StyledDefaultHeader";
import { useNavigate } from "react-router-dom";

const DefaultHeader = () => {
  let isLogged = false;
  const navigate = useNavigate();
  const navigateToCategory = () => {
    navigate("/category");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToMyPage = () => {
    navigate("/mypage");
  }
  

  return (
    <StyledDefaultHeader>
      <div class="wrapper">
        <div class="main-component">
          {isLogged ? <p>로그아웃</p> : <p>로그인</p>}

          <div id="default_top">
            <span class="logo" onClick={navigateToHome}>
              #EASE
            </span>
            <form class="search-box">
              <input type="text" placeholder="검색어를 입력하세요" />
              <button id="search-btn" type="submit">
                검색
              </button>
            </form>

            <div class="my-btn">
              <span onClick={navigateToMyPage}>마이페이지</span> /{" "}
              <span>주문조회</span> / <span>장바구니</span>
            </div>
          </div>

          <ul class="category-box">
            <li onClick={navigateToCategory}>Category1</li>
            <li onClick={navigateToCategory}>Category2</li>
            <li onClick={navigateToCategory}>Category3</li>
            <li onClick={navigateToCategory}>Category4</li>
            <li onClick={navigateToCategory}>Category5</li>
            <li onClick={navigateToCategory}>Category6</li>
          </ul>
        </div>
      </div>
    </StyledDefaultHeader>
  );
};

export default DefaultHeader;
