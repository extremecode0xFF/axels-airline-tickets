import { createSlice } from '@reduxjs/toolkit';
import { call, put, select, takeEvery } from 'redux-saga/effects';

import { requestGetTickets } from '../../api/requests/tickets';
import { filterTicketsByQueryParams } from '../../helpers/filterTickets';
import { sortTicketsByCurrentQueryParam } from '../../helpers/sortTickets';

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
  },
  reducers: {
    getTickets() {},
    setTickets(state, action) {
      return { ...state, tickets: [...action.payload] };
    },
    setFilteredTickets() {},
    setSortTickets() {},
  },
});

export function* handleGetTickets() {
  try {
    const { tickets } = yield call(requestGetTickets);
    yield put(setTickets(tickets));
  } catch (error) {
    console.error(error);
  }
}

export function* handleFilterTickets(action) {
  try {
    const { tickets } = yield call(requestGetTickets);
    const filtered = yield filterTicketsByQueryParams(tickets, action.payload);
    yield put(setTickets(filtered));
  } catch (error) {
    console.error(error);
  }
}

export function* handleSortTickets(action) {
  const tickets = yield select((state) => state.tickets);
  const sorted = yield sortTicketsByCurrentQueryParam(tickets, action.payload);
  yield put(setTickets(sorted));
}

export function* watcherSetFilteredTickets() {
  yield takeEvery(setFilteredTickets.type, handleFilterTickets);
}

export function* watcherSetSortedTickets() {
  yield takeEvery(setSortTickets.type, handleSortTickets);
}

export function* watcherGetTickets() {
  yield takeEvery(getTickets.type, handleGetTickets);
}

export const { getTickets, setTickets, setFilteredTickets, setSortTickets } =
  ticketsSlice.actions;

export default ticketsSlice.reducer;
