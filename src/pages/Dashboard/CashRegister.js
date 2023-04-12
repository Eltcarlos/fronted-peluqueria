import { format } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import CashForm from "../../components/form/CashForm";
import Table1 from "../../components/tables/Table";
import Total from "../../components/Total";
import { useCashFetch } from "../../hooks/cashFetch";
import SideBar from "./SideBar";

const CashRegister = () => {
  const { columns } = useCashFetch();
  const { cash } = useSelector((store) => store.cashState);

  const today = format(new Date(), "yyyy-MM-dd");

  const cashToDay = cash.filter((index) => index.date === today);

  const filterToCard = cashToDay
    .filter((index) => index.method === "Tarjeta")
    .reduce((previous, current) => {
      return previous + current.amount;
    }, 0);
  const filterToMoney = cashToDay
    .filter((index) => index.method === "Efectivo")
    .reduce((previous, current) => {
      return previous + current.amount;
    }, 0);

  const filterToLorena = cashToDay
    .filter((index) => index.worker === "Lorena")
    .reduce((previous, current) => {
      return previous + current.amount;
    }, 0);

  const filterToMiriam = cashToDay
    .filter((index) => index.worker === "Miriam")
    .reduce((previous, current) => {
      return previous + current.amount;
    }, 0);
  const total = filterToCard + filterToMoney;

  return (
    <SideBar>
      <h2 className="text-xl text-dry font-bold">Caja del dia</h2>
      <CashForm />
      <Table1 rows={cashToDay} columns={columns} />
      <Total card={filterToCard} money={filterToMoney} total={total} lorena={filterToLorena} miriam={filterToMiriam} />
    </SideBar>
  );
};

export default CashRegister;
