import "./App.css";
import styled from "styled-components";
import MainContent from "./components/MainContent";

function App() {
  document.title = "Dashboard api";
  return (
    <Container>
      <MainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 2rem;
`;

export default App;
