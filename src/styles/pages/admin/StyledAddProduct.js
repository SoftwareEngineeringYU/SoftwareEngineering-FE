import styled from "styled-components";

const StyledAddProduct = styled.div`
  display: flex;
  justify-content: center;

  .wrapper {
    width: 1200px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    width: 100%;
    height: 50px;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 85px;
    border-bottom: solid 1px;
    text-align: center;
  }

  .formBox {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inputWrapper {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
  }
  .text {
    width: 30%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .fileInput {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .submitBtn{
    width: 100px;
  }
`;

export default StyledAddProduct;
