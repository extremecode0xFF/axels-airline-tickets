import { filterTicketsByStops } from '../assets/helpers/filterTickets';

const configFilterCheckbox = [
  {
    title: 'Все',
    action: (tickets) => tickets,
    query: { all: 'active' },
  },
  {
    title: 'Без пересадок',
    action: filterTicketsByStops(0),
    query: { withoutTransfer: 'active' },
  },
  {
    title: '1 пересадка',
    action: filterTicketsByStops(1),
    query: { transfer1: 'active' },
  },
  {
    title: '2 пересадки',
    action: filterTicketsByStops(2),
    query: { transfer2: 'active' },
  },
  {
    title: '3 пересадки',
    action: filterTicketsByStops(3),
    query: { transfer3: 'active' },
  },
];

const configFilterTabs = [
  {
    title: 'Самый дешевый',
    action: () => {},
    query: { fastest: 'active' },
  },
  {
    title: 'Самый быстрый',
    action: () => {},
    query: { cheapest: 'active' },
  },
  {
    title: 'Оптимальный',
    action: () => {},
    query: { optimal: 'active' },
  },
];

export { configFilterCheckbox, configFilterTabs };
