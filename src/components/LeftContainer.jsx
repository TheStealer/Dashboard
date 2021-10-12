import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function LeftContainer(props) {
    const [detail, setDetail] = useState([]);
    const { id }: {id: string} = useParams();
        console.log(JSON.stringify(id.id));
    useEffect(() => {
        fetch(`https://grupo-1-games.herokuapp.com/api/products/detail/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setDetail(data.data)
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <Container>
            <h1>{props.title}</h1>
            <h2>{detail.name}</h2>
            <h3>{detail.id}</h3>
            <p>{detail.description}</p>
            <p>{detail.price}</p>
            <p>Stock: {detail.stock}</p>
        </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 48%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;
export default LeftContainer;