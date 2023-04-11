import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCash, sendCash } from "../../store/cashRegister/thunks";
import Select from "react-select";
import { useCashFetch } from "../../hooks/cashFetch";
import Swal from "sweetalert2";
import { cashLoad } from "../../store/cashRegister/cashSlice";

const CashForm = () => {
  const dispatch = useDispatch();
  const { cashLoading } = useSelector((state) => state.cash);
  const { method, worker, customStyles, setForm, onChange, handleChange, handleChangeMethod, form } = useCashFetch();
  const [state, setState] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setForm(form);
    Swal.fire({
      title: "Estas seguro?",
      icon: "info",
      text: `Nombre del cliente: ${form.name}`,
      footer: ` Valor a Pagar:${form.amount}`,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se ha guardado su registro correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(cashLoad());
        dispatch(sendCash(form));
        setTimeout(() => {
          setState(false);
        }, 2000);
      } else {
        return setState(false);
      }
    });
  };

  useEffect(() => {
    dispatch(getAllCash());
  }, [dispatch]);

  useEffect(() => {
    if (cashLoading === true || state === true) {
      dispatch(getAllCash());
    }
  }, [dispatch, cashLoading, state]);

  return (
    <div className="w-full ">
      <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="text-black block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nombre del Cliente
            </label>
            <input
              autoComplete="on"
              className="text-black appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="name"
              placeholder="Nombre del Cliente"
              value={form.name}
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="text-black block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Valor a Pagar
            </label>
            <input
              autoComplete="on"
              className="text-black appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              name="amount"
              placeholder="Valor a Pagar"
              value={form.amount}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6"></div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="text-black block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              onChange={handleChange}
            >
              Metodo de Pago
            </label>
            <Select
              className="text-black"
              styles={customStyles.select}
              onChange={handleChangeMethod}
              options={method}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="text-black block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Trabajador
            </label>
            <Select className="text-black" styles={customStyles.select} onChange={handleChange} options={worker} />
          </div>
          <button
            className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
            type="submit"
            onClick={onClick}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CashForm;
