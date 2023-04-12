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

  const filterToLorenaTotal = cash
    .filter((index) => index.worker === "Lorena")
    .reduce((previous, current) => {
      return previous + current.amount;
    }, 0);

  const filterToMiriamTotal = cash
    .filter((index) => index.worker === "Miriam")
    .reduce((previous, current) => {
      return previous + current.amount;
    }, 0);

  const { options, data, dataTotal } = useDashBoard(
    filterToMiriam,
    filterToLorena,
    reservation,
    filterToLorenaTotal,
    filterToMiriamTotal
  );

  return (
    <SideBar>
      <h2 className="text-black text-xl font-bold">DashBoard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-6">
        <div className="items-center">
          <h2 className="text-black  text-xl font-bold">Ganancias del Dia</h2>
          <Chart options={options} data={data} />
        </div>
        <div className="items-center">
          <h2 className="text-black  text-xl font-bold">Ganancias Totales</h2>
          <Chart options={options} data={dataTotal} />
        </div>
      </div>
    </SideBar>
  );
};

export default DashBoard;
