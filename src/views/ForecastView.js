import React from "react";
import NavBar from "../components/NavBar";
import ResponsiveTabs from "../components/ResponsiveTabs";
import Box from "@mui/material/Box";

const ForecastView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <ResponsiveTabs />
      </Box>
    </Box>
  );
};

export default ForecastView;
