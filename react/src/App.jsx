import styled from 'styled-components';
import Widgets from './components/Widgets';
import Formulario from './components/Formulario';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';



const TitleLink = styled(Link)`
  text-decoration: none;
`;


const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 200px;
  background-color: #042804;
  position: relative; /* Para permitir que o Widgets use position: absolute */
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 90px;
  color: #FFF;
`;

const WidgetsWrapper = styled.div`
  position: absolute;
  bottom: -125px; /* Ajuste conforme necessário */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
`;

function App() {
  return (
    <>
      <Header>
        <TitleLink to="/">
            <Title>DevFinance</Title>
          </TitleLink>
        <WidgetsWrapper>
          <Widgets/>
        </WidgetsWrapper>
      </Header>
      <Outlet/>
      {/* <Footer/> */}
      {/* <Formulario/> */}
    </>
  );
}

export default App;
