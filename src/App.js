import { Container, Row, Col } from 'react-bootstrap';
import Filters from './components/Filters';
import Header from './components/Header';
import Tickets from './components/ButtonTabs';
import ButtonMore from './components/ButtonMore';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e5e5e5;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0.5px;
  }
`

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
        <Row as='section'>
          <Col md={3}>
            <Filters name="Количество пересадок" checkBoxList={list} />
          </Col>
          <Col>
            <Tickets/>
            <ButtonMore/>
          </Col>
        </Row>
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
