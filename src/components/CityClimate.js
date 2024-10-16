import React from "react";
import Stack from "@mui/material/Stack";
import TitleCard from "./TitleCard";
import HourInfoStack from "./HourInfoStack";
import DailyInfoStack from "./DailyInfoStack";
import useWeatherData from "../hooks/useWeatherData";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import DataCard from "./DataCard";
import { coordinates } from "../constants/coordinates";
import LastUpdated from "./LastUpdated";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import propTypes from "prop-types";

const CityClimate = ({ city }) => {
  const { lat, lon } = coordinates[city];
  const { parsedData, dailyData, loading, lastRequestTime, refetch } =
    useWeatherData(lat, lon);

  if (loading) {
    return (
      <Stack spacing={2} direction="column">
        <TitleCard title="Next hours">
          <Box
            sx={{
              height: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        </TitleCard>
      </Stack>
    );
  }

  return (
    <>
      <Stack spacing={2} direction="column" sx={{ flexGrow: 1 }}>
        <DataCard
          title="Next hours"
          data={parsedData.slice(0, 8)}
          renderItem={(item) => (
            <HourInfoStack
              temperature={item.temperature.current}
              rain={item.rain}
              icon={item.weather.icon}
              date={item.date}
            />
          )}
          separatorIndex={7}
        />
        <DataCard
          title="Next 5 days"
          data={dailyData.slice(1, 6)}
          renderItem={(item) => (
            <DailyInfoStack
              date={item.date}
              minTemp={item.minTemp}
              maxTemp={item.maxTemp}
              rain={item.rain}
              icon={item.mostRepeatedIcon}
            />
          )}
          separatorIndex={4}
        />
      </Stack>

      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={refetch}
          sx={{
            width: {
              xs: "100%",
              sm: "30rem",
            },
            mt: 2,
          }}
          startIcon={<RefreshIcon />}
        >
          <Typography variant="button">Refresh</Typography>
        </Button>
      </Box>

      <LastUpdated lastRequestTime={lastRequestTime} />
    </>
  );
};

export default CityClimate;

CityClimate.propTypes = {
  city: propTypes.string.isRequired,
};
