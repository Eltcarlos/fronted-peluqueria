import { createSlice } from "@reduxjs/toolkit";

export const cashSlice = createSlice({
  name: "cash",
  initialState: {
    cash: [],
    cashLoading: false,
  },
  reducers: {
    insertCash: (state, { payload }) => {
      state.cash = payload;
      state.cashLoading = false;
    },
    removeCash: (state) => {
      state.cash = [];
      state.cashLoading = false;
    },
    cashLoad: (state) => {
      state.cashLoading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { insertCash, cashLoad, removeCash } = cashSlice.actions;
