import StyledDefaultHeader from "styles/components/StyledDefaultHeader";


const DefaultHeader = () => {
  let isLogged = false;
  return (
    <StyledDefaultHeader>
      <div class="wrapper">
        <div class="main-component">
          {isLogged ? <p>로그아웃</p> : <p>로그인</p>}

          <div id="default_top">
            <span class="logo">#EASE</span>
            <form class="search-box">
              <input type="text" placeholder="검색어를 입력하세요" />
              <button id="search-btn" type="submit">검색</button>
            </form>

            <div class="my-btn">
              <span>마이페이지</span> / <span>주문조회</span> / <span>장바구니</span>
            </div>
          </div>

          <ul class="category-box">
            <li>Category1</li>
            <li>Category2</li>
            <li>Category3</li>
            <li>Category4</li>
            <li>Category5</li>
            <li>Category6</li>
          </ul>

          {/* 만약 카테고리를 선택한 상황이라면 아래의 코드가 보이지 않도록 해야함. */}
          {/* <p>여기에 선택한 카테고리 이름</p> */}
        </div>
      </div>
    </StyledDefaultHeader>
  );
};

export default DefaultHeader;
