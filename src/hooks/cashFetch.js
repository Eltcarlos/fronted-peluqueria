import { useState } from "react";

export const useCashFetch = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Nombre del Cliente", width: 150 },
    { field: "method", headerName: "Metodo del Pago", width: 150 },
    {
      field: "worker",
      headerName: "Trabajador",
      width: 150,
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 150,
    },
    {
      field: "amount",
      headerName: "Pago Realizado",
      width: 130,
    },
    {
      field: "coin",
      headerName: "Moneda",
    },
  ];

  const worker = [
    { value: 0, label: "Miriam" },
    { value: 1, label: "Lorena" },
  ];

  const method = [
    { value: 0, label: "Efectivo" },
    { value: 1, label: "Tarjeta" },
  ];

  const [form, setForm] = useState({
    name: "",
    amount: 0,
    method: 0,
    worker: 0,
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChange = ({ value }) => {
    setForm({
      ...form,
      worker: value,
    });
  };

  const handleChangeMethod = ({ value }) => {
    setForm({
      ...form,
      method: value,
    });
  };

  const customStyles = {
    fontSize: 14,
    color: "blue",
  };

  return {
    columns,
    method,
    worker,
    onChange,
    handleChange,
    handleChangeMethod,
    form,
    setForm,
    customStyles,
  };
};
