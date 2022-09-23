import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects';

import reducer from './ducks/tickets';
import {
  watcherGetTickets,
  watcherSetFilteredTickets,
  watcherSetSortedTickets,
} from './ducks/tickets';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

function* watcherSaga() {
  yield all([
    watcherGetTickets(),
    watcherSetFilteredTickets(),
    watcherSetSortedTickets(),
  ]);
}

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
