import { takeLatest } from 'redux-saga/effects';
import { getTickets } from '../ducks/tickets';
import { handleGetTickets } from './handlers/tickets';

export function* watcherSaga() {
  yield takeLatest(getTickets.type, handleGetTickets);
}
