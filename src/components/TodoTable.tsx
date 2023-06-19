import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import dayjs from "dayjs";
import {
  DataGrid,
  type GridColDef,
  type GridValueGetterParams,
} from "@mui/x-data-grid";
import Priority from "./Priority";
import Category from "./Category";
import AssignedTo from "./AssignedTo";
// import { names } from "./AssignedTo";

// const assignedToWidth: number = 240 + names.length * 100;

function CheckBox() {
  return <Checkbox />;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "title", headerName: "Title", width: 260, editable: true },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 130,
    type: "date",
    editable: true,
    valueGetter: (params: GridValueGetterParams) => {
      const row = params.row as { dueDate: string };
      return new Date(row.dueDate);
    },
  },
  {
    field: "assignedTo",
    headerName: "Assigned To",
    type: "string",
    width: 640,
    renderCell: AssignedTo,
  },
  {
    field: "priority",
    headerName: "Priority",
    type: "string",
    width: 140,
    renderCell: Priority,
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    width: 240,
    renderCell: Category,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "date",
    width: 140,
    valueGetter: (params: GridValueGetterParams) => {
      const row = params.row as { createdAt: string };
      return new Date(row.createdAt);
    },
  },
  {
    field: "completedAt",
    headerName: "Completed At",
    type: "date",
    width: 160,
    valueGetter: (params: GridValueGetterParams) => {
      const row = params.row as { createdAt: string };
      return new Date(row.createdAt);
    },
  },
  {
    field: "isComplete",
    headerName: "Status",
    type: "boolean",
    width: 110,
    renderCell: CheckBox,
  },
];

const rows = [
  {
    id: 1,
    title: "Task 1",
    dueDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    assignedTo: "User 1",
    priority: "High",
    category: "Category 1",
    createdAt: null,
    completedAt: null,
    isComplete: "Incomplete",
  },
  {
    id: 2,
    title: "Task 2",
    dueDate: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    assignedTo: "User 2",
    priority: "Medium",
    category: "Category 2",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    completedAt: null,
    isComplete: "Incomplete",
  },
  {
    id: 3,
    title: "Task 3",
    dueDate: dayjs().add(3, "day").format("YYYY-MM-DD"),
    assignedTo: "User 3",
    priority: "Low",
    category: "Category 1",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    completedAt: null,
    isComplete: "Incomplete",
  },
  {
    id: 4,
    title: "Task 4",
    dueDate: dayjs().add(4, "day").format("YYYY-MM-DD"),
    assignedTo: "User 1",
    priority: "High",
    category: "Category 2",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    completedAt: null,
    isComplete: "Incomplete",
  },
  {
    id: 5,
    title: "Task 5",
    dueDate: dayjs().add(5, "day").format("YYYY-MM-DD"),
    assignedTo: "User 2",
    priority: "Medium",
    category: "Category 1",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    completedAt: null,
    isComplete: "Incomplete",
  },
  {
    id: 6,
    title: "Task 6",
    dueDate: dayjs().add(6, "day").format("YYYY-MM-DD"),
    assignedTo: "User 3",
    priority: "Low",
    category: "Category 2",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    completedAt: null,
    isComplete: "Incomplete",
  },
  {
    id: 7,
    title: "Task 7",
    dueDate: dayjs().add(7, "day").format("YYYY-MM-DD"),
    assignedTo: "User 1",
    priority: "High",
    category: "Category 1",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    completedAt: null,
    isComplete: "Incomplete",
  },
  {
    id: 8,
    title: "Task 8",
    dueDate: dayjs().add(8, "day").format("YYYY-MM-DD"),
    assignedTo: "User 2",
    priority: "Medium",
    category: "Category 2",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    completedAt: null,
    isComplete: "Incomplete",
  },
  {
    id: 9,
    title: "Task 9",
    dueDate: dayjs().add(9, "day").format("YYYY-MM-DD"),
    assignedTo: "User 3",
    priority: "Low",
    category: "Category 1",
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    completedAt: null,
    isComplete: "Incomplete",
  },
];

export default function TodoTable() {
  return (
    <div style={{ height: 600, width: "100%", marginTop: 20 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        // pageSizeOptions={[5, 10]}
        getRowHeight={() => 80}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
