import { all } from 'redux-saga/effects';
import { watcherGetTickets } from './handlers/tickets';

export function* watcherSaga() {
  yield all([watcherGetTickets()]);
}
