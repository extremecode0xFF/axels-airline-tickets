import { all } from 'redux-saga/effects';

import { watcherGetTickets } from './tickets';

export function* watcherSaga() {
  yield all([watcherGetTickets()]);
}
