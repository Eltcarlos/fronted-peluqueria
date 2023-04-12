import { insertCash } from "./cashSlice";
import { format } from "date-fns";

export const getAllCash = (data) => {
  return async (dispatch) => {
    try {
      const result = data.map((index) => {
        const id = index._id;
        const name = index.name;
        const method = index.method === 0 ? "Efectivo" : "Tarjeta";
        const worker = index.worker === 0 ? "Miriam" : "Lorena";
        const date = format(new Date(index.createdAt), "yyyy-MM-dd");
        const amount = index.amount;
        const coin = index.coin;
        return {
          id,
          name,
          method,
          worker,
          date,
          amount,
          coin,
        };
      });
      dispatch(insertCash(result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCash = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await fetch("http://localhost:8080/api/cash/registers", {
        headers: {
          "x-token": `${token}`,
        },
      })
        .then((res) => res.json())
        .catch((error) => error.json());

      const result = data.map((index) => {
        const id = index._id;
        const name = index.name;
        const method = index.method === 0 ? "Efectivo" : "Tarjeta";
        const worker = index.worker === 0 ? "Miriam" : "Lorena";
        const date = format(new Date(index.createdAt), "yyyy-MM-dd");
        const amount = index.amount;
        const coin = index.coin;
        return {
          id,
          name,
          method,
          worker,
          date,
          amount,
          coin,
        };
      });
      dispatch(insertCash(result));
    } catch (error) {
      console.log(error);
    }
  };
};
