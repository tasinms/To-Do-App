import React from "react";
import TodoTable from "./TodoTable";
import AddTodo from "./AddTodo";
import AddMember from "./AddMember";
import { Box, Toolbar } from "@mui/material";

export default function Body() {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Toolbar />
        <AddMember></AddMember>
        <AddTodo></AddTodo>
        <TodoTable></TodoTable>
      </Box>
    </>
  );
}
