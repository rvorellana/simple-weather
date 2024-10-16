import React, { useState } from 'react';
import Box from '@mui/material/Box';
import StyledTabs from './StyledTabs';
import StyledTab from './StyledTab';
import TabPanel from './TabPanel';
import CityClimate from './CityClimate';
import { cities } from '../constants/coordinates';


const a11yProps = (index) => ({
  id: `nav-tab-${index}`,
  'aria-controls': `nav-tabpanel-${index}`,
});

const ResponsiveTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="responsive tabs"
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
        indicatorColor="none"
      >
        {cities.map((city) => (
          <StyledTab key={city.value} label={city.label} {...a11yProps(city.value)} />
        ))}
      </StyledTabs>

      {cities.map((city) => (
        <TabPanel key={city.value} value={value} index={city.value}>
          <CityClimate city={city.label} />
        </TabPanel>
      ))}
    </Box>
  );
};

export default ResponsiveTabs;
