import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import Table1 from "../../components/tables/Table";
import { useReservationFetch } from "../../hooks/reservationFetch";
import { getAllReservation, getReservation } from "../../store/reservation/thunks";
import SideBar from "./SideBar";
import Swal from "sweetalert2";
import { SocketContext } from "../../context/SocketContext";

const Reservation = () => {
  const dispatch = useDispatch();
  const { reservations } = useSelector((state) => state.reservationState);
  const { socket } = useContext(SocketContext);
  const { columns } = useReservationFetch();

  const customStyles = {
    fontSize: 14,
    color: "blue",
  };
  const [form, setForm] = useState({
    id: "",
    date: "",
  });

  const date = [
    { value: "pending", label: "pending" },
    { value: "confirm", label: "confirm" },
    { value: "canceled", label: "canceled" },
  ];

  const handleChange = ({ value }) => {
    setForm({
      ...form,
      date: value,
    });
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    setForm(form);
    Swal.fire({
      title: "Estas seguro?",
      icon: "info",
      text: `id: ${form.id}`,
      footer: ` Estado:${form.date}`,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Se ha guardado su registro correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        socket.emit("list-reservationByID", form);
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    socket?.on("list-reservationByID", (data) => {
      dispatch(getAllReservation(data));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on("list-reservation", (data) => {
      dispatch(getAllReservation(data));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    dispatch(getReservation());
  }, [dispatch]);

  return (
    <SideBar>
      <h2 className="text-xl text-dry font-bold">Reservaciones</h2>
      <Table1 rows={reservations} columns={columns} />
      <div className="w-full ">
        <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">
          <div className="flex flex-wrap mx-3 mb-6">
            <div className="w-full  md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="text-black block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                ID de la cita
              </label>
              <input
                autoComplete="on"
                className="text-black mb-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="id"
                placeholder="id de la cita"
                value={form.id}
                onChange={onChange}
              />
              <Select className="text-black mb-2" styles={customStyles.select} onChange={handleChange} options={date} />
              <button
                className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
                type="submit"
                onClick={onClick}
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </SideBar>
  );
};

export default Reservation;
