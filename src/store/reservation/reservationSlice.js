import { createSlice } from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservations: [],
  },
  reducers: {
    insertReservation: (state, { payload }) => {
      state.reservations = payload;
    },
    removeReservation: (state) => {
      state.reservations = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { insertReservation, removeReservation } = reservationSlice.actions;
