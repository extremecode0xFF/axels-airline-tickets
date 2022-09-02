import { QuerySort } from './../types/queries';
import {
  TRANSFER_0,
  TRANSFER_1,
  TRANSFER_2,
  TRANSFER_3,
  CHEAPEST,
  FASTEST,
  OPTIMAL,
} from '../data/constants/queries';
import { ConfigParams } from '../types/config';
import { QueriesFilter } from '../types/queries';

const configFilterCheckbox: ConfigParams<QueriesFilter>[] = [
  {
    title: 'Без пересадок',
    query: TRANSFER_0,
  },
  {
    title: '1 пересадка',
    query: TRANSFER_1,
  },
  {
    title: '2 пересадки',
    query: TRANSFER_2,
  },
  {
    title: '3 пересадки',
    query: TRANSFER_3,
  },
];

const configFilterTabs: ConfigParams<QuerySort>[] = [
  {
    title: 'Самый дешевый',
    query: CHEAPEST,
  },
  {
    title: 'Самый быстрый',
    query: FASTEST,
  },
  {
    title: 'Оптимальный',
    query: OPTIMAL,
  },
];

export { configFilterCheckbox, configFilterTabs };
