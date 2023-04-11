import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table1 = ({ rows, columns }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
};

export default Table1;
