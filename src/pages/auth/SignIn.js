import StyledSignIn from "styles/pages/auth/StyledSignIn";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signUp");
  };

  const loginTest = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://greencart.one/sapi/api/v1/auth/login",
        {
          email: "1@1.com",
          password: "111111!q",
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const singUpTest = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://greencart.one/sapi/api/v1/auth/signup",
        {
          nickname: "test",
          email: "1@1.com",
          password: "111111!q",
        },
        {
          headers: {
            withCredentials: true,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://greencart.one/sapi",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getRequestTest = async (e) => {
    e.preventDefault();

    await axios
      .get(
        "https://greencart.one/sapi/api/v1/products?page=0&size=5&sort=name,desc",
        {
          headers: {
            withCredentials: true,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledSignIn>
      <div className="signInWrapper">
        <div className="signInBox">
          <h1 className="title">SignIn</h1>
          <form className="signInForm">
            <input type="text" placeholder="ID" className="idInput" />
            <input type="password" placeholder="PW" className="pwInput" />
            <button type="submit" className="submitBtn">
              로그인
            </button>
            <div className="findBtns">
              {/* 아이디 비번 찾기 걍 없애면 안되냐 */}
              <p>아이디 찾기</p>|<p>비밀번호 찾기</p>
            </div>
          </form>
          <button type="button" className="signUp" onClick={navigateToSignUp}>
            회원가입
          </button>
          <button
            onClick={loginTest}
            style={{ width: "300px", height: "150px", marginTop: "20px" }}
          >
            Click To Test
          </button>
        </div>
      </div>
    </StyledSignIn>
  );
};

export default SignIn;

// import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API;

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true
// });

// axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
// axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = process.env.REACT_APP_API_DOMAIN;
// axiosInstance.defaults.headers.common["Accept"] = "application/json";

// export default axiosInstance;
