import React from "react";
import styled from "styled-components";
import ProfileContainer from "./ProfileContainer";
function Sidebar() {
    return (<Container>
        <ProfileContainer
            name="Kevin Hintze Maldonado" />
    </Container>
    )
}

const Container = styled.div`
   width: 20%;
    height: 100% !important;
    border-radius: 2rem;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    `;

export default Sidebar;