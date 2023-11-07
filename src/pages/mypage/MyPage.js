import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import StyledMyPage from "styles/pages/mypage/StyledMyPage";

const MyPage = () => {
  const navigate = useNavigate();

  const handleChangePage = (pageName) => {
    // 경로를 설정할 때 객체를 사용하여 동적 경로를 생성합니다.
    navigate(`./${pageName}`);
  };

  useEffect(() => {
    navigate(`./myreviews`);
  }, []);

  return (
    <StyledMyPage>
      <div className="wrapper">
        <div className="header">
          <h1>MyPage</h1>
          <p>UserName</p>
          <p>UserEmail</p>
        </div>
        <div className="body">
          <div className="navBox">
            <div onClick={() => handleChangePage("myreviews")}>My Reviews</div>
            <div onClick={() => handleChangePage("orderhistory")}>
              Order History
            </div>
            <div onClick={() => handleChangePage("editinfo")}>Edit info</div>
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
