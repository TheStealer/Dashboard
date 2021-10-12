import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
function HeaderContainer(props) {
  return (
    <HeaderContainerStyled>
          <h1>{props.title}</h1>
          <CardsContainer>
          <Cards
              cosa={props.cosa}
                          />
                <Cards
              cosa={"categories"}
                          />
                <Cards
              cosa={"users"}
                                />
          </CardsContainer>
    </HeaderContainerStyled>
    );
}
const HeaderContainerStyled = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #f5f5f5;
        border-radius: 2rem;
        gap: 1rem;
        width: 98%;
        height: 10rem;
        `;
const CardsContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        `;
export default HeaderContainer;