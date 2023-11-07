import StyledSignIn from "styles/pages/auth/StyledSignIn";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signUp");
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
        </div>
      </div>
    </StyledSignIn>
  );
};

export default SignIn;
