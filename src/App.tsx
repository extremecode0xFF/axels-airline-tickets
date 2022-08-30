import React, { useState } from 'react';

import {
  Filters,
  Header,
  ButtonTabs,
  ButtonMore,
  TicketList,
} from './components';
import { Container, Row, Col } from 'react-bootstrap';
import { GlobalStyles } from './styled/GlobalStyles';

import { configFilterCheckbox, configFilterTabs } from './configs/params';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const tickets = useTypedSelector((state) => state.tickets);
  const [visibleTickets, setVisibleTickets] = useState(5);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Row className="mx-auto" as="section">
          <Col md={3}>
            <Filters
              name="Количество пересадок"
              config={configFilterCheckbox}
            />
          </Col>
          <Col>
            <ButtonTabs config={configFilterTabs} />
            <TicketList tickets={tickets} visibleTickets={visibleTickets} />
            <ButtonMore setShowMore={setVisibleTickets} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
