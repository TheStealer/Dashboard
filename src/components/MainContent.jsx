import React, {useRef,useState,useEffect} from "react";
import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
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
            console.log(idnumber)
    }, [idnumber]);
    function valor() {
        number_id = id.current.value;
        console.log(number_id);
        history.push(`/${number_id}`);
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
                <Route  path="/">
                    <LeftContainer
                        title="Contenedor de Productos"
                         id={78}
                    />
                </Route>
                <Route path="/" >
                    <RightContainer title="Categorías en base de datos" cosa="categories"/>
                </Route>
            </MainContent3>
        </MainContent2>
    )}


    const MainContent2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 1rem;
  padding: 1rem;
  background-color: gray;
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
        background-color: gray;
        border-radius: 2rem;
        gap: 3rem;
        align-items: center;
`;

export default MainContent;