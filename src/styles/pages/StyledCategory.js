import styled from "styled-components";

const StyledCategory = styled.div`
  display: flex;
  justify-content: center;

  .wrapper {
    width: 1200px;
  }
  .categoryName {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .productsBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sorting{
    text-align: left;
    width: 100%;
  }
  .sortingMethods {
    display: flex;
    flex-direction: row;
    justify-content: left;
  }
  .productCardWrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin: auto;
  }
  productCard {
    width: 100%;
    height: 100%;
  }
`;

export default StyledCategory;
