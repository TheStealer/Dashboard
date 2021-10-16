import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

function Items(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (props.cosa === "product") {
            fetch("https://grupo-1-games.herokuapp.com/api/products")
                .then((res) => res.json())
                .then((data) => {
                    setItems(data.data);
                });
        }
        }, []);

        return (
            items.map((item,i) => (
                <LastContainer>
                    <ul key={i}>
                        <li>{item.name}</li>
                        <li>{item.id}</li>
                        <li>{item.price}</li>
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

export default Items;