import StyledDefaultHeader from "styles/components/StyledDefaultHeader";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DefaultHeader = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const navigateToCategory = (e) => {
    setCategory(e.target.textContent);
    navigate(`/${category}`);
  };

  const navigateToCart = (e) => {
    navigate("/cart");
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

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);

  const logout = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://greencart.one/sapi/api/v1/accounts/logout",
        {
          accessToken: sessionStorage.getItem("accessToken"),
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        sessionStorage.removeItem("accessToken");
        setIsLogged(false);
        alert("로그아웃 되었습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledDefaultHeader>
      <div className="wrapper">
        <div className="main-component">
          {isLogged ? (
            <p onClick={logout}>로그아웃</p>
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
              <div>
                {isLogged ? (
                  <span onClick={navigateToMyPage}>마이페이지</span>
                ) : null}
              </div>
              <div>
                {isLogged ? (
                  <span onClick={navigateToCart}>장바구니</span>
                ) : null}
              </div>
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
