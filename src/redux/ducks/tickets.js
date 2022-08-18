import { createSlice } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { requestGetTickets } from '../../api/requests/tickets';

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

export function* watcherGetTickets() {
  yield takeLatest(getTickets.type, handleGetTickets);
}

export const { getTickets, setTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;
