import StyledSignUp from "styles/pages/auth/StyledSignUp";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState(false);
  const [nickname, setNickname] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    // 비밀번호가 서로 일치하는지 확인하는 로직
    setIsPasswordSame(password === passwordCheck);
  }, [password, passwordCheck]);

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    await axios
      .post("https://greencart.one/sapi/api/v1/auth/signup", {
        nickname: nickname,
        email: email,
        password: password,
      })
      .then((res) => {
        alert("회원가입이 완료되었습니다.");
        console.log(res);
        navigate("/signIn");
      })
      .catch((err) => {
        console.log(err);
        alert("회원가입에 실패하였습니다.");
      });
  };

  return (
    <StyledSignUp>
      <div className="signUpWrapper">
        <div className="signUpBox">
          <h1 className="title">SignUp</h1>
          <form className="signUpForm">
            <div className="fieldContainer">
              <div className="textContainer">
                <span className="text">Email</span>
                <span className="text">PW</span>
                <span>비밀번호는 영어 대소문자, 숫자, 특수문자를 모두 사용해야함.</span>
                <span className="text">PW Check</span>
                {isPasswordSame ? null : (
                  <span>비밀번호가 일치하지 않습니다.</span>
                )}
                <span className="text">NickName</span>
              </div>
              <div className="inputContainer">
                <input
                  type="text"
                  placeholder="Input your Email"
                  onChange={onChangeEmail}
                />
                <input
                  type="password"
                  placeholder="Input your PW"
                  onChange={onChangePassword}
                />
                <input
                  type="password"
                  placeholder="Input your PW"
                  onChange={onChangePasswordCheck}
                />
                <input
                  type="text"
                  placeholder="Input your NickName"
                  onChange={onChangeNickname}
                />
              </div>
            </div>
            <button
              type="submit"
              className="submitBtn"
              disabled={!isPasswordSame}
              onClick={signUp}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;
