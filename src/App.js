import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import {
  Filters,
  Header,
  ButtonTabs,
  ButtonMore,
  TicketList,
} from './components';
import { GlobalStyles } from './styled/GlobalStyles';

import { configFilterCheckbox, configFilterTabs } from './filters/params';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTickets } from './store/ducks/tickets';

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);
  const [visibleTickets, setVisibleTickets] = useState(5);
  const [searchParams] = useSearchParams();
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  useEffect(() => {
    let isPresentParams = false;
    const filteredCheckBoxes = [...searchParams].reduce((a, param) => {
      const key = param[0];

      const final = configFilterCheckbox.reduce((acc, val) => {
        if (val.query[key]) {
          isPresentParams = true;
          const result = val.action(tickets);
          acc.push(...result);
        }
        return acc;
      }, []);
      a.push(...final);

      return a;
    }, []);

    if (isPresentParams) {
      setFilteredTickets(filteredCheckBoxes);
    } else {
      setFilteredTickets(tickets);
    }
  }, [searchParams, tickets]);

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
              tickets={filteredTickets}
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
