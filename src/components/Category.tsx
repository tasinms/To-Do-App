import * as React from "react";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function Category() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl fullWidth sx={{ m: 0 }}>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        variant="outlined"
        inputProps={{
          "aria-label": "Without label",
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Work</MenuItem>
        <MenuItem value={20}>Academics</MenuItem>
        <MenuItem value={30}>Research</MenuItem>
      </Select>
    </FormControl>
  );
}
