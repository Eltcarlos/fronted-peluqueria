import { format } from "date-fns";
import { insertReservation } from "./reservationSlice";

export const getAllReservation = (data) => {
  return async (dispatch) => {
    try {
      const result = data.map((index) => {
        const id = index._id;
        const name = index.name;
        const email = index.email;
        const number = index.number;
        const date = format(new Date(index.createdAt), "yyyy-MM-dd");
        const status = index.status;
        return {
          id,
          name,
          email,
          number,
          date,
          status,
        };
      });
      dispatch(insertReservation(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getReservation = () => {
  return async (dispatch) => {
    try {
      const url = process.env.REACT_APP_BACKEND_CORE;
      const token = localStorage.getItem("token");
      const { data } = await fetch(`${url}/api/reservation/registers`, {
        headers: {
          "x-token": `${token}`,
        },
      })
        .then((res) => res.json())
        .catch((error) => error.json());

      const result = data.map((index) => {
        const id = index._id;
        const name = index.name;
        const email = index.email;
        const number = index.number;
        const date = format(new Date(index.createdAt), "yyyy-MM-dd");
        const status = index.status;
        return {
          id,
          name,
          email,
          number,
          date,
          status,
        };
      });
      dispatch(insertReservation(result));
    } catch (error) {
      console.log(error);
    }
  };
};
