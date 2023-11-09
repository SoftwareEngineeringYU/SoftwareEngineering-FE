import styled from "styled-components";

const StyledReviewBox = styled.div`
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 15px;

  .reviewHeader {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  .header__left {
    display: flex;
    flex-direction: column;
  }
  .reviewTitle {
    color: #000;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .reviewWriter {
    color: #8d8d8d;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .reviewStarBox {
    width: 100px;
    height: 27px;
    background: #f0f0f0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .reviewBody {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
  .reviewImg {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }
  img {
    width: 100px;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .reviewText {
    width: 100%;
    height: 100px;
    border: 1px solid black;
    padding: 15px;
  }
  .reviewFooter {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }
`;

export default StyledReviewBox;
