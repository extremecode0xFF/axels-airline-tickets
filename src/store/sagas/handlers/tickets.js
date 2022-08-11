import { call, put } from 'redux-saga/effects';
import { setTickets } from '../../ducks/tickets';
import { requestGetTickets } from '../requests/tickets';

export function* handleGetTickets() {
  try {
    const { tickets } = yield call(requestGetTickets);
    yield put(setTickets(tickets));
  } catch (error) {
    console.error(error);
  }
}
