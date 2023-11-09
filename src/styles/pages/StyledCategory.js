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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
    border: solid 1px;
    margin-top: 10px;
  }
  productCard {
    width: 100%;
    height: 100%;
  }
`;

export default StyledCategory;
