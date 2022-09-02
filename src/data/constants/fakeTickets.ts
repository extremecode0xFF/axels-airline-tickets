import { Ticket } from '../../types/api';

const FAKE_TICKETS: Ticket[] = [
  {
    price: 20210,
    carrier: 'S7',
    segments: [
      {
        origin: 'AA',
        destination: 'BB',
        date: Date.now().toString(),
        stops: [],
        duration: 100,
      },
      {
        origin: 'AA',
        destination: 'BB',
        date: Date.now().toString(),
        stops: [],
        duration: 50,
      },
    ],
  },
  {
    price: 22000,
    carrier: 'S7',
    segments: [
      {
        origin: 'AA',
        destination: 'BB',
        date: Date.now().toString(),
        stops: ['CC'],
        duration: 125,
      },
      {
        origin: 'AA',
        destination: 'BB',
        date: Date.now().toString(),
        stops: ['CC'],
        duration: 170,
      },
    ],
  },
  {
    price: 19000,
    carrier: 'S7',
    segments: [
      {
        origin: 'AA',
        destination: 'BB',
        date: Date.now().toString(),
        stops: ['AB', 'BC'],
        duration: 20,
      },
      {
        origin: 'CV',
        destination: 'VC',
        date: Date.now().toString(),
        stops: ['GB', 'BG'],
        duration: 10,
      },
    ],
  },
  {
    price: 23400,
    carrier: 'S7',
    segments: [
      {
        origin: 'MS',
        destination: 'VC',
        date: Date.now().toString(),
        stops: ['AB', 'BC', 'CC'],
        duration: 10,
      },
      {
        origin: 'CV',
        destination: 'VC',
        date: Date.now().toString(),
        stops: ['GB', 'BG', 'CC'],
        duration: 10,
      },
    ],
  },
];

export default FAKE_TICKETS;
