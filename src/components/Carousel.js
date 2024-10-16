import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Carousel = ({ children }) => {
  return (
    <Box
      sx={{
        overflowX: "auto",
        display: "flex",
        padding: 1,
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Stack spacing={0} direction="row">
        {children}
      </Stack>
    </Box>
  );
};

export default Carousel;
