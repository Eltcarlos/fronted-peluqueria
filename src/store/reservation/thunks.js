import { format } from "date-fns";
import { insertReservation } from "./reservationSlice";

export const getAllReservation = (form) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await fetch("http://localhost:8080/api/reservation/registers", {
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

export const sendReservationByID = (form) => {
  return async (dispatch) => {
    try {
      const { id, date } = form;
      const status = {
        status: date,
      };
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:8080/api/reservation/register/${id}`, {
        method: "POST",
        headers: {
          "x-token": `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      })
        .then((res) => res.json())
        .catch((error) => error.json());
      // dispatch(insertReservation(result));
    } catch (error) {
      console.log(error);
    }
  };
};
