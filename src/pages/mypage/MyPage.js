import { useState } from "react";
import { Outlet } from "react-router-dom";
import StyledMyPage from "styles/pages/mypage/StyledMyPage";


const MyPage = () => {
  const [page, setPage] = useState("myReviews");


  const handleChangePage = (pageName) => {
    setPage(pageName);
    //라우팅 경로는 아직 정해지지 않았음, 임의로 설정함.
    
  };

  return (
    <StyledMyPage>
    <div className="wrapper">
      <div className="header">
        <p id="mypage-header">MyPage</p>
        <div className="division-line"></div>

        <div className="namebox">
          <p id="username" align="center">UserName</p>
          <p align="center">UserEmail</p>
        </div>
      </div>

      <div className="body">
        <div className="navBox">
          <div className="mypage-category" onClick={() => handleChangePage("myReviews")}>My Reviews</div>
          <div className="mypage-category" onClick={() => handleChangePage("orderHistory")}>
            Order History
          </div>
          <div className="mypage-category" onClick={() => handleChangePage("editInfo")}>Edit info</div>
        </div>
        <div className="page">
          <Outlet />
        </div>
      </div>

    </div>
    </StyledMyPage>
  );
};

export default MyPage;
