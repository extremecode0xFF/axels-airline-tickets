import { BASE_URL, ROUTE_TICKETS } from '../../data/constants/api';

export const requestGetTickets = async () => {
  const res = await fetch(BASE_URL + ROUTE_TICKETS);
  return res.json();
};
