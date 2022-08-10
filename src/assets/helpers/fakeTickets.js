const createFakeTickets = (total) => {
  const data = [];
  for (let i = 0; i < total; i++) {
    data.push({
      price: 20_000,
      carrier: 'S7',
      segments: [
        {
          origin: 'MOV',
          destination: 'HKT',
          date: new Date(2013, 2, 1, 10, 30),
          stops: ['HKG', 'JNB'],
          duration: 1200,
        },
        {
          origin: 'MOV',
          destination: 'HKT',
          date: new Date(2013, 2, 1, 12, 54),
          stops: ['HKG'],
          duration: 800,
        },
      ],
    });
  }
  return data;
};

export { createFakeTickets };
