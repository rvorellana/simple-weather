import Box from "@mui/material/Box";
import React from "react";
import PropTypes from "prop-types";

const TabPanel = ({ children, value, index, ...other }) => (
  <Box
    role="tabpanel"
    hidden={value !== index}
    id={`nav-tabpanel-${index}`}
    aria-labelledby={`nav-tab-${index}`}
    {...other}
    sx={{
      backgroundColor: (theme) => theme.palette.background.default,
      height: '100%',
      overflowY: 'auto', 
      padding: 2,
      boxSizing: 'border-box',
    }}
  >
    {value === index && (
      <Box sx={{ p: 2, height: '100%' }}> 
        {children}
      </Box>
    )}
  </Box>
);

export default TabPanel;

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



