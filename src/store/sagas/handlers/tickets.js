import { call, put, takeLatest } from 'redux-saga/effects';
import { getTickets, setTickets } from '../../ducks/tickets';
import { requestGetTickets } from '../requests/tickets';

export function* handleGetTickets() {
  try {
    const { tickets } = yield call(requestGetTickets);
    yield put(setTickets(tickets));
  } catch (error) {
    console.error(error);
  }
}

export function* watcherGetTickets() {
  yield takeLatest(getTickets.type, handleGetTickets);
}
