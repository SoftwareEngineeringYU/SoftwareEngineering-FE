import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Mypage = () => {
  const [page, setPage] = useState("myReviews");
  const navigate = useNavigate();

  const handleChangePage = (pageName) => {
    setPage(pageName);
    //라우팅 경로는 아직 정해지지 않았음, 임의로 설정함.
    navigate(`/mypage/${page}`);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h1>MyPage</h1>
        <p>UserName</p>
        <p>UserEmail</p>
      </div>
      <div className="body">
        <div className="navBox">
          <div onClick={() => handleChangePage(myReviews)}>My Reviews</div>
          <div onClick={() => handleChangePage(orderHistory)}>
            Order History
          </div>
          <div onClick={() => handleChangePage(editInfo)}>Edit info</div>
        </div>
        <div className="page">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Mypage;
