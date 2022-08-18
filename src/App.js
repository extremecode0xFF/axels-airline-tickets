import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  Filters,
  Header,
  ButtonTabs,
  ButtonMore,
  TicketList,
} from './components';
import { GlobalStyles } from './styled/GlobalStyles';

import { getTickets } from './redux/ducks/tickets';
import { configFilterCheckbox, configFilterTabs } from './configs/params';
import { sortTicketsByCurrentQueryParam } from './helpers/sortTickets';
import { filterTicketsByQueryParams } from './helpers/filterTickets';

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);
  const [visibleTickets, setVisibleTickets] = useState(5);
  const [searchParams] = useSearchParams();
  const [filteredTickets, setFilteredTickets] = useState(tickets);
  const [sortedTickets, setSortedTickets] = useState(filteredTickets);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  useEffect(() => {
    const filtered = filterTicketsByQueryParams(tickets, searchParams);
    setFilteredTickets(filtered);
  }, [searchParams, tickets]);

  useEffect(() => {
    const sorted = sortTicketsByCurrentQueryParam(
      filteredTickets,
      searchParams
    );
    setSortedTickets(sorted);
  }, [searchParams, filteredTickets]);

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
            <TicketList
              tickets={sortedTickets}
              visibleTickets={visibleTickets}
            />
            <ButtonMore setShowMore={setVisibleTickets} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
