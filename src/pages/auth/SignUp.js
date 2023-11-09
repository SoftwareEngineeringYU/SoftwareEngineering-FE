import StyledSignUp from "styles/pages/auth/StyledSignUp";

const SignUp = () => {
  return (
    <StyledSignUp>
      <div className="signUpWrapper">
        <div className="signUpBox">
          <h1 className="title">SignUp</h1>
          <form className="signUpForm">
            <div className="fieldContainer">
              <div className="textContainer">
                <span className="text">ID</span>
                <span className="text">PW</span>
                <span className="text">PW Check</span>
                <span className="text">NickName</span>
                <span className="text">Email</span>
              </div>
              <div className="inputContainer">
                <input type="text" placeholder="Input your ID" />
                <input type="password" placeholder="Input your PW" />
                <input type="password" placeholder="Input your PW" />
                <input type="text" placeholder="Input your NickName" />
                <input type="email" placeholder="Input your Email" />
              </div>
            </div>
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;
