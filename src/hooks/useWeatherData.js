import { useState, useEffect, useCallback } from 'react';
import moment from 'moment';

const useWeatherData = (lat, lon) => {
  const [parsedData, setParsedData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastRequestTime, setLastRequestTime] = useState(null);
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const fetchWeatherData = useCallback(async () => {
    setLoading(true);
    setError(null); 

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&cnt=40`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const rawData = await response.json();
      const formattedData = rawData.list.map((item) => ({
        date: item.dt_txt,
        temperature: {
          current: Math.round(item.main.temp),
          min: Math.round(item.main.temp_min),
          max: Math.round(item.main.temp_max),
        },
        humidity: item.main.humidity,
        weather: {
          icon: item.weather[0]?.icon,
        },
        rain: item.rain ? item.rain['3h'] || 0 : 0,
      }));

      setParsedData(formattedData);
      setLastRequestTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
      aggregateDailyData(formattedData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [lat, lon, apiKey]);

  const aggregateDailyData = (formattedData) => {
    const dailyAggregate = formattedData.reduce((acc, item) => {
      const day = moment(item.date).format('YYYY-MM-DD');

      if (!acc[day]) {
        acc[day] = {
          date: day,
          minTemp: item.temperature.min,
          maxTemp: item.temperature.max,
          temperatures: [item.temperature.current],
          rain: item.rain,
          icons: [item.weather.icon],
        };
      } else {
        acc[day].minTemp = Math.min(acc[day].minTemp, item.temperature.min);
        acc[day].maxTemp = Math.max(acc[day].maxTemp, item.temperature.max);
        acc[day].temperatures.push(item.temperature.current);
        acc[day].rain += item.rain;
        acc[day].icons.push(item.weather.icon);
      }

      return acc;
    }, {});

    const aggregatedData = Object.values(dailyAggregate);
    setDailyData(aggregatedData);
  };

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  return { parsedData, dailyData, lastRequestTime, loading, error, refetch: fetchWeatherData };
};

export default useWeatherData;
