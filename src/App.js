import { Container, Row, Col } from 'react-bootstrap';
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
    </>
  );
}

export default App;
