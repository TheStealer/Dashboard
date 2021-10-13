import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function LeftContainer(props) {
    const [detail, setDetail] = useState([]);
    // const { id }: { id: string } = useParams();
    // console.log(JSON.stringify(id.id));
    console.log(props.id);
    useEffect(() => {
        fetch(`https://grupo-1-games.herokuapp.com/api/products/detail/${props.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setDetail(data.data)
            })
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        console.log("Actualizando componente")
    }, [detail])

    if (props.id != null) {
        return (
            <Container >
                <h1>{props.title}</h1>
                <h2>{detail.name}</h2>
                <h3>{detail.id}</h3>
                <p>{detail.description}</p>
                <p>{detail.price}</p>
                <p>Stock: {detail.stock}</p>
            </Container>
        );
    }
    else {
        return (
            <Container >
                <h1> Elemento {props.id} no encontrado</h1>
            </Container>
        );
    }
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