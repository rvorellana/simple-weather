import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import { formatTime } from "../utils/dateUtils";

const HourInfoStack = ({ temperature, rain, icon, date }) => (
  <Stack
    spacing={1}
    justifyContent="center"
    textAlign="center"
    sx={{
      minWidth: {
        xs: 100,
        sm: 300,
      },
      flexShrink: 0,
    }}
  >
    <Typography variant="body2" component="div" sx={{ fontWeight: "bold" }}>
      {temperature}°
    </Typography>
    <Typography
      variant="body2"
      component="div"
      sx={{ color: "lightblue", width: "100%" }}
    >
      {rain} mm
    </Typography>
    <Box
      component="img"
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt="weather icon"
      sx={{
        width: "100%",
        height: "4rem",
        objectFit: "contain",
      }}
    />
    <Typography variant="body2" component="div" sx={{ color: "gray" }}>
      {formatTime(date)}
    </Typography>
  </Stack>
);

HourInfoStack.propTypes = {
  temperature: PropTypes.number.isRequired,
  rain: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default HourInfoStack;
