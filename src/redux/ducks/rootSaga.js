import { all } from 'redux-saga/effects';

import {
  watcherGetTickets,
  watcherSetFilteredTickets,
  watcherSetSortedTickets,
} from './tickets';

export function* watcherSaga() {
  yield all([
    watcherGetTickets(),
    watcherSetFilteredTickets(),
    watcherSetSortedTickets(),
  ]);
}
