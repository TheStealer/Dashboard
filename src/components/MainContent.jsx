import React from "react";
import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
function MainContent() {
    return (
        <MainContent2>
            <HeaderContainer
                title="Total de cosas" />
            <MainContent3>
                <LeftContainer
                    productTitle="Producto A"
                    description="Probando descripción del producto"
                    price="$300"
                    quantity="5"
                />
                <RightContainer title="Categorías en base de datos"/>
            </MainContent3>
        </MainContent2>
    )}

    const MainContent2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 1rem;
  padding: 1rem;
  background-color: gray;
  border-radius: 2rem;
  gap: 3rem;
  align-items: center;
`;
const MainContent3 = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        margin: 0 1rem;
        padding: 1rem;
        background-color: gray;
        border-radius: 2rem;
        gap: 3rem;
        align-items: center;
`;

export default MainContent;