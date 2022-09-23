import { Ticket } from '../../types/api';

const FAKE_DATE = new Date('Thu Sep 01 2022 16:57:54').toString();

const FAKE_TICKETS: Ticket[] = [
  {
    price: 20210,
    carrier: 'S7',
    segments: [
      {
        origin: 'AA',
        destination: 'BB',
        date: FAKE_DATE,
        stops: [],
        duration: 100,
      },
      {
        origin: 'AA',
        destination: 'BB',
        date: FAKE_DATE,
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
        date: FAKE_DATE,
        stops: ['CC'],
        duration: 125,
      },
      {
        origin: 'AA',
        destination: 'BB',
        date: FAKE_DATE,
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
        date: FAKE_DATE,
        stops: ['AB', 'BC'],
        duration: 20,
      },
      {
        origin: 'CV',
        destination: 'VC',
        date: FAKE_DATE,
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
        date: FAKE_DATE,
        stops: ['AB', 'BC', 'CC'],
        duration: 10,
      },
      {
        origin: 'CV',
        destination: 'VC',
        date: FAKE_DATE,
        stops: ['GB', 'BG', 'CC'],
        duration: 10,
      },
    ],
  },
];

export default FAKE_TICKETS;
