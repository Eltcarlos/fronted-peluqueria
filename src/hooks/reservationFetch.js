import { Box } from "@mui/material";

export const useReservationFetch = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 210 },
    { field: "name", headerName: "Nombre del Cliente", width: 150 },
    { field: "email", headerName: "Correo del Cliente", width: 200 },
    {
      field: "number",
      headerName: "Numero",
      width: 150,
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 150,
    },
    {
      field: "status",
      headerName: "Estado de la cita",
      width: 150,
      renderCell: ({ row: { status } }) => {
        return (
          <Box width="100%" m="0 auto" p="5px" display="flex" justifyContent="center" borderRadius="4px">
            {status === "pending" && <h1 className="text-yellow-500		">pending</h1>}
            {status === "confirm" && <h1 className="text-green-600		">confirm</h1>}
            {status === "canceled" && <h1 className="text-red-700		">canceled</h1>}
          </Box>
        );
      },
    },
  ];

  return {
    columns,
  };
};
