export const requestGetTickets = async () => {
  const res = await fetch('http://localhost:3001/tickets');
  return res.json();
};
