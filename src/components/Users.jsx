import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
            fetch("https://grupo-1-games.herokuapp.com/api/users")
                .then((res) => res.json())
                .then((data) => {
                    setUsers(data.data);
                });
        }, []);
        return (
            users.map((item,i) => (
                <LastContainer>
                    <ul key={i}>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.lastname}</li>
                        <li>{item.email}</li>
                    </ul>
                </LastContainer>
            ))
        )
    }


const LastContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    height: 50%;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`;

export default Users