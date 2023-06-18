import * as React from "react";
import Head from "next/head";
import NavigationBar from "@component/components/NavigationBar";
import LeftPanel from "@component/components/LeftPanel";
import Body from "@component/components/Body";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Dashboard() {
  return (
    <>
      {/* <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavigationBar />
        <LeftPanel />
        <Body></Body>
      </Box>
    </>
  );
}
