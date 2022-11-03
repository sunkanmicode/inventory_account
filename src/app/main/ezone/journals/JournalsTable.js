import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "date", headerName: "Name", editable: true, width: 120 },
  {
    field: "referenceNumber",
    headerName: "Reference Number",
    width: 200,
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 150,
    editable: true,
  },
  {
    field: "createdBy",
    headerName: "Created By",
    type: "text",
    width: 120,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    type: "text",
    width: 110,
    editable: true,
  },
  {
    field: "action",
    headerName: "Actions",
    type: "text",
    width: 110,
    editable: true,
  },
  {
    field: "action",
    headerName: "Actions",
    // description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <div>
          <Button
            variant="contained"
            color="secondary"
          >
            Options
          </Button>
        </div>
      );
    },
  },
];



const rows = [
  {
    id: 1,
    date: "July, 27 2021",
    referenceNumber: 23456,
    amount: 5000,
    createdBy: "Cersei",
    status: "Published",
    // action: "option",
  },
  {
    id: 2,
    date: "July, 27 2021",
    referenceNumber: 23456,
    amount: 5000,
    createdBy: "Cersei",
    status: "Published",
    // action: "option",
  },
  {
    id: 3,
    date: "July, 27 2021",
    referenceNumber: 23456,
    amount: 5000,
    createdBy: "Cersei",
    status: "Published",
    // action: "option",
  },
  {
    id: 4,
    date: "July, 27 2021",
    referenceNumber: 23456,
    amount: 5000,
    createdBy: "Cersei",
    status: "Published",
    // action: "option",
  },
  {
    id: 5,
    date: "July, 27 2021",
    referenceNumber: 23456,
    amount: 5000,
    createdBy: "Cersei",
    status: "Published",
    // action: "option",
  },
];


function JournalsTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default JournalsTable
