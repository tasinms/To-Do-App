import React from "react";
import { TextField, Box, Button } from "@mui/material";

function AddTodo() {
  return (
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          sx={{
            width: 2 / 4,
          }}
        />
        <Button
          variant="outlined"
          sx={{
            marginLeft: "12px",
            width: 0.5 / 4,
          }}
        >
          ADD
        </Button>
        <Box
          sx={{
            marginLeft: "12px",
          }}
        ></Box>
      </Box>
    </form>
  );
}

export default AddTodo;
