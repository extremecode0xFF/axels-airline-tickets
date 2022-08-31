import { Ticket } from "../../types/api";

const FAKE_TICKETS: Ticket[] = [
  {
    price: 22000,
    carrier: 'S7',
    segments: [
      {
        origin: 'AA',
        destination: 'BB',
        date: Date.now().toString(),
        stops: [],
        duration: 125,
      },
      {
        origin: 'AA',
        destination: 'BB',
        date: Date.now().toString(),
        stops: [],
        duration: 170,
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
    price: 22000,
    carrier: 'S7',
    segments: [
      {
        origin: 'AA',
        destination: 'BB',
        date: Date.now().toString(),
        stops: ['AB', 'BC'],
        duration: 125,
      },
      {
        origin: 'CV',
        destination: 'VC',
        date: Date.now().toString(),
        stops: ['GB', 'BG'],
        duration: 170,
      },
    ],
  },
  {
    price: 22000,
    carrier: 'S7',
    segments: [
      {
        origin: 'MS',
        destination: 'VC',
        date: Date.now().toString(),
        stops: ['AB', 'BC', 'CC'],
        duration: 125,
      },
      {
        origin: 'CV',
        destination: 'VC',
        date: Date.now().toString(),
        stops: ['GB', 'BG', 'CC'],
        duration: 170,
      },
    ],
  },
];

export default FAKE_TICKETS;
