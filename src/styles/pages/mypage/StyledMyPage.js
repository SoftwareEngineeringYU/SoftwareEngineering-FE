import styled from "styled-components";

const StyledMyPage = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin: auto;

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .header {
    width: 100%;
    height: 200px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .body {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .navBox {
    width: 20%;
    height: 500px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 24px;
  }
  .page{
    width: 80%;
  }
`;

export default StyledMyPage;
