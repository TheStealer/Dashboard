import React,{ useState, useEffect } from "react";
import styled from "styled-components";

function Cards(props) {
    const [products, setProducts] = useState([]);
    const [totales,setTotals] = useState([]);
    useEffect(() => {
        if (props.cosa === "products") {
            console.log("fetch to products api")
            fetch("https://grupo-1-games.herokuapp.com/api/products")
                .then((res) => res.json())
                .then(data => {
                    console.log(data.data)
                    setProducts(data.data)
                    setTotals(data.meta.total)
                })
                .catch((err) => console.log(err));
        } else if (props.cosa === "categories") {
            console.log("fetch to categories api")
            fetch(`https://grupo-1-games.herokuapp.com/api/products/listCategories`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProducts(data.data)
                    setTotals(data.meta.total)
                })
                .catch((err) => console.log(err));
        }
        else if (props.cosa === "users") {
            console.log("fetch to users api")
            fetch("https://grupo-1-games.herokuapp.com/api/users")
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProducts(data.data)
                    setTotals(data.meta.total)
                })
                .catch((err) => console.log(err));
        }
    }, []);

    let contador = 0;
    products.map((product, i) => {
        contador = i + 1;
    });

    return (
        <CardContainer>
            <h1>{props.cosa}</h1>
            <h1>{contador}</h1>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 10px;
    margin: 0px;
    min-width: 200px;
    max-width: 500px;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background-color: hsl(1, 5%, 80%);
    gap: 10px;
`;

export default Cards;