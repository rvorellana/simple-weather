import Box from "@mui/material/Box";

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



