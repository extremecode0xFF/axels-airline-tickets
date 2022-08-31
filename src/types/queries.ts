import {
  CHEAPEST,
  FASTEST,
  OPTIMAL,
  TRANSFER_0,
  TRANSFER_1,
  TRANSFER_2,
  TRANSFER_3,
} from '../data/constants/queries';

export type QuerySort = typeof CHEAPEST | typeof FASTEST | typeof OPTIMAL;

export type QueriesFilter =
  | typeof TRANSFER_0
  | typeof TRANSFER_1
  | typeof TRANSFER_2
  | typeof TRANSFER_3;
