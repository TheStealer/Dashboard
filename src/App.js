import "./App.css";
import styled from "styled-components";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Container>
      {/* <Sidebar /> */}
      <MainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background-color: #f5f5f5;
  border-radius: 2rem;
`;

export default App;
