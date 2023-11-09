import styled from "styled-components";

const StyledSignIn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 143px;

  .signInWrapper {
    width: 1200px;
    display: flex;
    justify-content: center;
  }
  .signInBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    width: 205px;
    height: 50px;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 85px;
    border-bottom: solid 1px;
    text-align: center;
  }
  .signInForm {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 231px;
  }
  input {
    width: 400px;
    height: 50px;
    border-radius: 3px;
    border: 1px solid #000;
    padding: 10px 12px;
    font-size: 20px;
  }
  .idInput {
    margin-bottom: 9px;
  }
  .pwInput {
    margin-bottom: 35px;
  }
  .submitBtn {
    width: 400px;
    height: 50px;
    color: white;
    border-radius: 3px;
    background: #000;
    margin-bottom: 19px;
  }
  .findBtns {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    color: #a0a0a0;
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .signUp {
    width: 250px;
    height: 50px;
    border-radius: 3px;
    background: #d2d2d2;
    color: white;
    margin-top: 71px;
    border: none;
  }
`;
export default StyledSignIn;
