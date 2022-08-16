import { filterTicketsByStops } from '../assets/helpers/filterTickets';

const configFilterCheckbox = [
  {
    title: 'Все',
    action: (tickets) => tickets,
    query: 'all',
  },
  {
    title: 'Без пересадок',
    action: filterTicketsByStops(0),
    query: 'transfer0',
  },
  {
    title: '1 пересадка',
    action: filterTicketsByStops(1),
    query: 'transfer1',
  },
  {
    title: '2 пересадки',
    action: filterTicketsByStops(2),
    query: 'transfer2',
  },
  {
    title: '3 пересадки',
    action: filterTicketsByStops(3),
    query: 'transfer3',
  },
];

const configFilterTabs = [
  {
    title: 'Самый дешевый',
    action: () => {},
    query: 'cheapest',
  },
  {
    title: 'Самый быстрый',
    action: () => {},
    query: 'fastest',
  },
  {
    title: 'Оптимальный',
    action: () => {},
    query: 'optimal',
  },
];

export { configFilterCheckbox, configFilterTabs };
