import React from "react";
import styled from "styled-components";

function MainContent() {
    return (
        <MainContent2>
            <HeaderContainer/>
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
const HeaderContainer = styled.div`
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
export default MainContent;