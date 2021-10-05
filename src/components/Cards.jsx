import React from "react";
import styled from "styled-components";

function Cards(props) {
    return (
        <CardContainer>
            <h1>{props.titulo}</h1>
            <h1 className="cantidad">{props.cantidad}</h1>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: hsl(1, 5%, 80%);
`;

export default Cards;