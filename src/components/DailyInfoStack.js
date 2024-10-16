import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { formatDate } from "../utils/dateUtils";

const temperatureStyles = {
  fontWeight: "medium",
};

const DailyInfo = ({ date, minTemp, maxTemp }) => (
  <Stack
    spacing={1}
    justifyContent="center"
    textAlign="center"
    sx={{
      minWidth: {
        xs: 180,
        sm: 400,
      },
      flexShrink: 0,
    }}
  >
    <Typography variant="h6" component="div" sx={{ fontWeight: "bold", fontSize: 15 }}>
      {formatDate(date)}
    </Typography>

    <Grid container justifyContent="center" spacing={0} alignItems="center">
      <Grid item xs={6} container direction="column" alignItems="center">
        <ArrowUpwardIcon color="error" aria-label="Max temperature icon" />
        <Typography variant="body1" sx={{ ...temperatureStyles, color: "red" }}>
          {maxTemp}°C
        </Typography>
        <Typography variant="caption" component="div">
          Max Temp
        </Typography>
      </Grid>

      <Grid item xs={6} container direction="column" alignItems="center">
        <ArrowDownwardIcon color="primary" aria-label="Min temperature icon" />
        <Typography
          variant="body1"
          sx={{ ...temperatureStyles, color: "blue" }}
        >
          {minTemp}°C
        </Typography>
        <Typography variant="caption" component="div">
          Min Temp
        </Typography>
      </Grid>
    </Grid>
  </Stack>
);

DailyInfo.propTypes = {
  date: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
};

export default DailyInfo;
