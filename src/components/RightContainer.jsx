import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
function RightContainer(props) {
    return (
        <Container>
            <h3>{props.title}</h3>
            <Cards
                titulo="Categorias"
                cantidad="30"
            />
        </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;
export default RightContainer;
