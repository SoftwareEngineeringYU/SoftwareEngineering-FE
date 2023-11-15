import StyledSignIn from "styles/pages/auth/StyledSignIn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToSignUp = () => {
    navigate("/signUp");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  // const loginTest = async (e) => {
  //   e.preventDefault();

  //   await axios
  //     .post(
  //       "https://greencart.one/sapi/api/v1/auth/login",
  //       {
  //         email: "1@1.com",
  //         password: "111111!q",
  //       },
  //       {
  //         withCredentials: true,
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const signIn = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://greencart.one/sapi/api/v1/auth/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // 서버 응답의 헤더에서 Authorization 헤더 가져오기
        const authorizationHeader = res.headers.get("Authorization");

        // Authorization 헤더에서 JWT 토큰 추출
        const token = authorizationHeader && authorizationHeader.split(" ")[1];

        //session storage에 토큰 저장
        sessionStorage.setItem('accessToken', token);
        
        console.log(res);
        alert("로그인 성공");
        navigateToHome();
      })
      .catch((err) => {
        console.log(err);
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      });
  };
  // const signUpTest = async (e) => {
  //   e.preventDefault();

  //   await axios
  //     .post(
  //       "https://greencart.one/sapi/api/v1/auth/signup",
  //       {
  //         nickname: "test",
  //         email: "1@1.com",
  //         password: "111111!q",
  //       },
  //       {
  //         headers: {
  //           withCredentials: true,
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "https://greencart.one/sapi",
  //           Accept: "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const pwInputHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <StyledSignIn>
      <div className="signInWrapper">
        <div className="signInBox">
          <h1 className="title">SignIn</h1>
          <form className="signInForm">
            <input
              type="text"
              placeholder="Email"
              className="idInput"
              onChange={emailInputHandler}
            />
            <input
              type="password"
              placeholder="PW"
              className="pwInput"
              onChange={pwInputHandler}
            />
            <button type="submit" className="submitBtn" onClick={signIn}>
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
          {/* <button
            onClick={loginTest}
            style={{ width: "300px", height: "150px", marginTop: "20px" }}
          >
            Click To Test
          </button> */}
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
