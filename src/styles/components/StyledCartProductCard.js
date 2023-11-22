import styled from "styled-components";

const StyledCartProductCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    border: 1px solid black;
    padding: 10px;

    .checkBox{
        width: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }

    .productImg{
        width: 100px;
        height: 100px;
        background-color: lightgray;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .productName{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px;
    }
    .productPrice{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
    }
    .productNumber{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100px;
    }
`;

export default StyledCartProductCard;