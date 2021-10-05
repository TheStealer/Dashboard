import React from "react";
import styled from "styled-components";
function ProfileContainer(props) {
    return (
        <Profile_Container>
            Hola {props.name}
        </Profile_Container>
    )
}

const Profile_Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 40%;
    color: black;
    background-color: white;
    border-radius: 2rem;
    padding: 10px;
    margin: 10px;
`;

export default ProfileContainer;
