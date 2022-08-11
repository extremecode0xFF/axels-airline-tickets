import { createSlice } from '@reduxjs/toolkit';

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

export const { getTickets, setTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;
