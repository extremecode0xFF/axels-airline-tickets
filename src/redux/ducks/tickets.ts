import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, StrictEffect, takeEvery } from 'redux-saga/effects';

import { requestGetTickets } from '../../api/requests/tickets';
import { filterTicketsByQueryParams } from '../../helpers/filterTickets';
import { sortTicketsByCurrentQueryParam } from '../../helpers/sortTickets';
import { Ticket } from '../../types/api';
import { QueriesFilter, QuerySort } from '../../types/queries';

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [] as Ticket[],
  },
  reducers: {
    getTickets() {},
    setTickets(state, action) {
      return { ...state, tickets: [...action.payload] };
    },
    setFilteredTickets(state, action: PayloadAction<string[]>) {},
    setSortTickets(state, action: PayloadAction<string>) {},
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

export function* handleFilterTickets(action: {
  type: string;
  payload: QueriesFilter[];
}) {
  try {
    const { tickets } = yield call(requestGetTickets);
    const filtered: Ticket[] = yield filterTicketsByQueryParams(
      tickets,
      action.payload
    );
    yield put(setTickets(filtered));
  } catch (error) {
    console.error(error);
  }
}

export function* handleSortTickets(action: {
  type: string;
  payload: QuerySort;
}): Generator<StrictEffect, void, Ticket[]> {
  const tickets = yield select((state) => state.tickets);
  const sorted = sortTicketsByCurrentQueryParam(tickets, action.payload);
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
