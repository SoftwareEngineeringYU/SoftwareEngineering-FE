const DefaultHeader = () => {
  let isLogged = false;
  return (
    <StyledDefaultHeader>
      {isLogged ? <p>로그아웃</p> : <p>로그인</p>}
      <span>LOGO HERE</span>
      <form>
        <input type="text" placeholder="검색어를 입력하세요" />
        <button type="submit">검색</button>
      </form>
      <div>
        <span>마이페이지 </span>/<span> 주문조회 </span>/<span>장바구니</span>
      </div>
      <ul>
        <li>Category1</li>
        <li>Category2</li>
        <li>Category3</li>
        <li>Category4</li>
        <li>Category5</li>
        <li>Category6</li>
      </ul>

      {/* 만약 카테고리를 선택한 상황이라면 아래의 코드가 보이지 않도록 해야함. */}
      {/* <p>여기에 선택한 카테고리 이름</p> */}
    </StyledDefaultHeader>
  );
};

export default DefaultHeader;
