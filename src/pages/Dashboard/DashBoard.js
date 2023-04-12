import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "../../components/Chart/Chart";
import { SocketContext } from "../../context/SocketContext";
import { useDashBoard } from "../../hooks/dashboard";
import { getAllCash, getCash } from "../../store/cashRegister/thunks";
import SideBar from "./SideBar";

const DashBoard = () => {
  const { cash } = useSelector((state) => state.cashState);
  const { reservations } = useSelector((state) => state.reservationState);
  const dispatch = useDispatch();
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket?.on("list-cash", (data) => {
      dispatch(getAllCash(data));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    dispatch(getCash());
  }, [socket, dispatch]);

  const filterToMiriam = cash
    .filter((index) => index.worker === "Miriam")
    .reduce((previous, current) => {
      return previous + current.amount;
    }, 0);

  const filterToLorena = cash
    .filter((index) => index.worker === "Lorena")
    .reduce((previous, current) => {
      return previous + current.amount;
    }, 0);

  const reservation = reservations.map((index) => {
    const status = index.status === "pending" && 0;
    return {
      status,
    };
  });

  const { options, data } = useDashBoard(filterToMiriam, filterToLorena, reservation);

  return (
    <SideBar>
      <h2 className="text-black text-xl font-bold">DashBoard</h2>
      <Chart options={options} data={data} />
    </SideBar>
  );
};

export default DashBoard;
