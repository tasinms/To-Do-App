import * as React from "react";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

function Priority() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl fullWidth sx={{ m: 0, minWidth: 120, border: "none" }}>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{
          "aria-label": "Without label",
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>High</MenuItem>
        <MenuItem value={20}>Medium</MenuItem>
        <MenuItem value={30}>Low</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Priority;
