import React, {useRef,useState,useEffect} from "react";
import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import LastItem from "./LastItem";
import Items from "./Items";
import Users from "./Users";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function MainContent() {
    const history = useHistory();
    let id = useRef();
    console.log(id)
    let number_id;
    let [idnumber, setIdNumber] = useState([]);
    useEffect(() => {
            number_id = id.current.value;
            setIdNumber(number_id);
            console.log("Actualizando id",idnumber)
    }, [idnumber]);
    function valor() {
        number_id = id.current.value;
        console.log(number_id);
        history.push(`/${number_id}`);
        setIdNumber({})
        setIdNumber(number_id);
        return number_id;
    }

    return (
        <MainContent2>
            <div>
                <input type="text" placeholder="Busqueda" defaultValue="78" ref={id}></input>
                <button onClick={valor}>Buscar</button>
            </div>
            <Route path="/" >
            <HeaderContainer title="Contenedor de Encabezado" cosa="products" />
            </Route>
            <MainContent3>
                <Route exact path={"/:id"}>
                    <LeftContainer
                        title="Contenedor de Productos"
                         id={idnumber}
                    />
                </Route>
                <Route path="/" >
                    <RightContainer title="Categorías en base de datos" cosa="categories"/>
                </Route>
            </MainContent3>
            <MainContent4>
                <Route path="/">
                    <LastItem title="Último" cosa="product" />
                    <LastItem title="Último" cosa="user"/>
                </Route>
            </MainContent4>
            <h1>Lista de Productos</h1>
            <MainContent4>
                <Route path="/">
                    <Items title="Lista de Productos" cosa="product" />
                </Route>
            </MainContent4>
            <h1>Lista de usuarios</h1>
            <MainContent4>
                <Route path="/">
                    <Users/>
                </Route>
            </MainContent4>
        </MainContent2>
    )}


    const MainContent2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 1rem 1rem;
  padding: 1rem;
  background-color: #1b8ecc;
  border-radius: 2rem;
  gap: 3rem;
  align-items: center;
`;
const MainContent3 = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        margin: 0 1rem;
        padding: 1rem;
        background-color: #1b8ecc;
        border-radius: 2rem;
        gap: 3rem;
        align-items: center;
`;
const MainContent4 = styled.div`
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        margin: 0 1rem;
        padding: 1rem;
        background-color: #1b8ecc;
        border-radius: 2rem;
        gap: 1rem;
        align-items: center;
        flex-wrap: wrap;
`;

export default MainContent;