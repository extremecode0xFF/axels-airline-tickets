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

import { configFilterCheckbox, configFilterTabs } from './filters/params';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Container>
          <Header />
          <Row className="mx-auto" as="section">
            <Col md={3}>
              <Filters name="Количество пересадок" config={configFilterCheckbox} />
            </Col>
            <Col>
              <ButtonTabs config={configFilterTabs} />
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
