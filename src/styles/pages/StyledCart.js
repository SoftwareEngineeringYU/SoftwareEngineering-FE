import styled from "styled-components";

const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 1200px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .header__title {
    font-size: 30px;
    font-weight: bold;
    margin: 20px;
    border-bottom: 1px solid black;
  }
  .header__row {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding-left: 40px;
  }
  .chekAll {
    margin-right: 20px;
  }
  .body {
    width: 1200px;
    margin: 20px 0;
  }
  .footer {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footer__row {
    width: 100%;
    height: 50px;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
  }
  .sum{
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    margin-right: 20px;
  }
  .deleteBtn__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin: 10px 0;
    width: 100%;
  }
  .deleteSelectedBtn {
    margin: 10px;
  }
  .deleteAllBtn {
    margin: 10px;
  }
  .footer__orderBtnWrapper {
  }
  .orderAllBtn {
    margin: 10px;
  }
  .orderSelectedBtn {
    margin: 10px;
  }
`;

export default StyledCart;
