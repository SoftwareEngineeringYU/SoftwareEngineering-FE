import styled from "styled-components";

const StyledSignUp = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 143px;

  .signUpWrapper {
    width: 1200px;
    display: flex;
    justify-content: center;
  }
  .signUpBox {
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
  .signUpForm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .fieldContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .textContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 50px;
  }
  .text {
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 20px;
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
  }
  input {
    fill: #f4f4f4;
    stroke-width: 1px;
    stroke: #000;
    margin-bottom: 20px;
    width: 200px;
    height: 24px;
    flex-shrink: 0;
    font-size: 15px;
  }
  .submitBtn {
    width: 250px;
    height: 50px;
    border-radius: 3px;
    background: #000;
    color: white;
    margin-top: 75px;
  }
`;
export default StyledSignUp;
