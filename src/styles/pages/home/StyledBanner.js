import styled from "styled-components";

const StyledBanner = styled.div`
color: black;

.header {
    display: flex;
    justify-content: center;
}

.banner {
    display: flex;
    justify-content: center;
    border: solid 1px;
    width: 1200px;
}

.banner-image {
    width: 900px;
    height: 480px;
    border: solid 1px;
    box-sizing: border-box;
}

ul {
    width: 300px;
    height: 480px;
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

li {
    list-style-type: none;
    height: 80px;
    border: solid 1px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;


}

`

export default StyledBanner;