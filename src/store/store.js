import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../store/auth/authSlice";
import { cashSlice } from "./cashRegister/cashSlice";
import { reservationSlice } from "./reservation/reservationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cash: cashSlice.reducer,
    reservation: reservationSlice.reducer,
  },
});
