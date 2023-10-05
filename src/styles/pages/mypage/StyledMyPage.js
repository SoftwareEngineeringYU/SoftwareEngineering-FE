import styled from "styled-components";

const StyledMyPage = styled.div`


.wrapper {
    flex-direction: column;
    width: 1200px;
    //border: solid 1px;
    margin: 0px auto;
}

#mypage-header {
    margin: 30px 0px 0px 0px;
    font-size: 20px;
}

.division-line {
    border-top: 1px solid black;
    margin: 10px auto;
    padding-bottom: 50px;
    width: 205px; 
}

.header {
    display: flex;
    width: 1200px;
    //border: solid 1px;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.namebox {
    display: flex;
    width: 1200px;
    height: 200px;
    border: solid 1px;
    justify-content: center;
    flex-direction: column;
    margin: 0px 0px 83px 0px;
    
}

#username {
    font-size: 50px;
    //font-weight: bold;
}

.body {
    width: 1200px;
    //border: solid 1px;

.navBox {
    border: solid 1px;
    width: 174px;
    height: 500px;
}

.mypage-category {
    margin: 16px 0px 16px 25px;
}

`

export default StyledMyPage;