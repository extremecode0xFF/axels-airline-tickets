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
import { sortTicketsByPrice } from './assets/helpers/sortTickets';

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
    const ticketsFiltered = [...searchParams].reduce((a, param) => {
      const key = param[0];
      
      const final = configFilterCheckbox.reduce((acc, {query,action}) => {
        if (query === key) {
          isPresentParams = true;
          acc.push(...action(tickets));
        }
        return acc;
      }, []);
      a.push(...final);

      return a;
    }, []);

    const hasSortParam = configFilterTabs.reduce((acc,{query})=>{
      if(searchParams.has(query)){
        acc.push(query)
      }
      return acc
    },[])

    if(hasSortParam.length){
      //todo
      console.log(sortTicketsByPrice(ticketsFiltered))
    }

    if (isPresentParams) {
      setFilteredTickets(ticketsFiltered);
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
