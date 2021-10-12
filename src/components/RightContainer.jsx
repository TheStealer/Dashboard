import React,{ useState, useEffect } from "react";
import styled from "styled-components";
function RightContainer(props) {
    const [categorias, setCategorias] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log("fetch to categories api")
        fetch("https://grupo-1-games.herokuapp.com/api/products/listCategories")
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setCategorias(data.data);
            });
            fetch("https://grupo-1-games.herokuapp.com/api/products")
            .then((res) => res.json())
            .then(data => {
                console.log(data.data)
                setProducts(data.data)
            })
            .catch((err) => console.log(err));
    }, [])

     return (
        <Container>
             <h3>{props.title}</h3>
             {
                 categorias.map((categoria, i) => (
                     <CardContainer key={i}>
                         <h1>{categoria.name}</h1>
                         <h1>{products.filter(product => product.Category.name === categoria.name).length}</h1>
                     </CardContainer>
                 )
                    )}
        </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    gap: 10px;
`;
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
export default RightContainer;
