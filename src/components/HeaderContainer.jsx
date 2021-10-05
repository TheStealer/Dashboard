import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
function HeaderContainer(props) {
  return (
    <HeaderContainerStyled>
          <h1>{props.title}</h1>
          <Cards
              titulo="Películas"
              cantidad="20"
          />
          <Cards
              titulo="Actores"
              cantidad="128"
          />
          <Cards
              titulo="Productos"
              cantidad="1368"
          />
    </HeaderContainerStyled>
    );
}
const HeaderContainerStyled = styled.div`
        display: flex;
        flex-direction: rows;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #f5f5f5;
        border-radius: 2rem;
        gap: 1rem;
        width: 98%;
        height: 10rem;
        `;
export default HeaderContainer;