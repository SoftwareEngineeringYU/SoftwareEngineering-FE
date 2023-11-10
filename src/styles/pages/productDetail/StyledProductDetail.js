import styled from "styled-components";

const StyledProductDetail = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .productImg {
    width: 300px;
    height: 300px;
    margin-bottom: 1rem;
  }
  .admin_modifyBtn {
    color: white;
    background-color: blue;
    width: 100px;
  }
  .admin_deleteBtn {
    color: white;
    background-color: red;
    width: 100px;
  }
  .productName {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .productPrice {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .productIntro {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: gray;
  }

  .buyBtn {
    width: 1200px;
    margin-bottom: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    background-color: #000;
    color: #fff;
    font-weight: 600;
  }
  .cartBtn {
    width: 1200px;
    margin-bottom: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    background-color: gray;
    color: #fff;
    font-weight: 600;
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  .stateBtn {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  hr{
    margin-top: 1rem;
  }
`;

export default StyledProductDetail;
