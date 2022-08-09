import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import {
  Filters,
  Header,
  ButtonTabs,
  ButtonMore,
  TicketList,
} from './components';
import { GlobalStyles } from './styled/GlobalStyles';

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
      <BrowserRouter>
        <GlobalStyles />
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
      </BrowserRouter>
    </>
  );
}

export default App;
