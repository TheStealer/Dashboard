import React from "react";
import styled from "styled-components";

function LeftContainer(props) {
    return (
        <Container>
            <h3>{props.productTitle}</h3>
            <img src={props.image} alt={props.alternative} />
            <p>{props.description}</p>
            <p>{props.price}</p>
            <p>{props.quantity}</p>
        </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 48%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;
export default LeftContainer;