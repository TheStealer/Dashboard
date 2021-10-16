import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

function Item(props) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props.cosa === "product") {
            fetch("https://grupo-1-games.herokuapp.com/api/products")
                .then((res) => res.json())
                .then((data) => {
                    setItem(data.data);
                    setLoading(false);
                });
        }
        }, [props.cosa]);

    useEffect(() => {
        if (props.cosa === "user") {
            fetch("https://grupo-1-games.herokuapp.com/api/users")
                .then((res) => res.json())
                .then((data) => {
                    setItem(data.data);
                    setLoading(false);
                });
        }}, [props.cosa]);


    if (props.cosa === "product") {
        return (
            <>
            {loading ? (
                <LastContainer>Loading...</LastContainer>
            ) : (
            <LastContainer>
                <h1>Last {props.cosa} </h1>
                            <h2>{item.slice(-1)[0].name}</h2>
                            <h2>{item.slice(-1)[0].id}</h2>
                            <h2>{item.slice(-1)[0].description}</h2>
                            <h2>{ item.slice(-1)[0].price}</h2>
             </LastContainer>
            )}
            </>
        );
    }
    else if (props.cosa === "user") {
        return (
            <>
            {loading ? (
                <LastContainer>Loading...</LastContainer>
            ) : (
                <LastContainer>
                            <h1>Last {props.cosa} </h1>
                            <h2>{item.slice(-1)[0].id}</h2>
                            <h2>{item.slice(-1)[0].name}</h2>
                            <h2>{item.slice(-1)[0].lastname}</h2>
                            <h2>{item.slice(-1)[0].email}</h2>
                </LastContainer>
            )}
            </>
        );
    }
}

const LastContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 45%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
`;


export default Item;
