import * as React from "react";
import dayjs from "dayjs";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

export default function TodoCard() {
  return (
    <Card variant="outlined" sx={{ width: 2 / 4, marginTop: "12px" }}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <TextField
          id="outlined"
          label="Title"
          defaultValue="Todo Title"
          InputProps={{
            readOnly: true,
          }}
          sx={{ width: 3 / 4 }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginTop: "24px",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Due By"
              defaultValue={dayjs("2022-04-17")}
              readOnly
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Completed At"
              defaultValue={dayjs("2022-04-17")}
              readOnly
              sx={{ marginLeft: "12px" }}
            />
          </LocalizationProvider>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
