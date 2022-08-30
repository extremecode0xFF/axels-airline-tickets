import { Ticket } from './../../types/api';
import { BASE_URL, ROUTE_TICKETS } from '../../data/constants/api';

export const requestGetTickets = async (): Promise<Ticket[]> => {
  const res = await fetch(BASE_URL + ROUTE_TICKETS);
  return res.json();
};
