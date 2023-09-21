import styled from "styled-components";

const StyledDefaultHeader = styled.div`
  color: black;

  .header {
    display: flex;
    justify-content: center;
  }

  .main-component {
    width: 1200px;
    height: 250px;
    display: flex;
    flex-direction: column;
  }

  #default_top {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 30px;
    
  }

  .logo {
    color: black;
    font-size: 36px
  }

  .search-box {
    width: 585px;
  }

  #search-btn {
    margin-left: 10px;
  }
  
  .category-box {
    padding: 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: solid 1px;
  }

  ul {
    width: 1200px;
  }

  li {
    border: solid 1px;
    width: 200px;
    height: 72px;
    list-style-type: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 500px;
    height: 30px;
  }

  p {
    display: flex;
    flex-direction: row-reverse;
  }


`

export default StyledDefaultHeader;