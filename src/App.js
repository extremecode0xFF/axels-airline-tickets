import { Container, Row, Col } from 'react-bootstrap';
import Filters from './components/Filters';
import Header from './components/Header';
import ButtonTabs from './components/ButtonTabs';
import ButtonMore from './components/ButtonMore';
import TicketList from './components/TicketList';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e5e5e5;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0.5px;
    font-weight: 600;
  }
`;

function App() {
  const list = [
    'Все',
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
  ];
  return (
    <>
      <Container>
        <Header />
        <Row className="mx-auto" as="section">
          <Col md={3}>
            <Filters name="Количество пересадок" checkBoxList={list} />
          </Col>
          <Col>
            <ButtonTabs />
            <TicketList />
            <ButtonMore />
          </Col>
        </Row>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
