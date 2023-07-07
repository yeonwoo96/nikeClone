import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 370px;
  min-height: calc(100vh - 370px);
`;
function App() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}

export default App;
