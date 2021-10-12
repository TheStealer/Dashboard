import React from "react";
import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import { Route} from "react-router-dom";
function MainContent() {
    return (
        <MainContent2>
            <Route path="/api/products/detail/:id" >
            <HeaderContainer title="Contenedor de Encabezado" cosa="products" />
            </Route>
            <MainContent3>
                <Route path="/api/products/detail/:id">
                    <LeftContainer
                        title="Contenedor de Productos"
                    />
                </Route>
                <Route path="/api/products/detail/:id" >
                <RightContainer title="Categorías en base de datos" cosa="categories"/>
                </Route>
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