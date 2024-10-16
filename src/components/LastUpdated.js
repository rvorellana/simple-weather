import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import propTypes from 'prop-types';

const LastUpdated = ({ lastRequestTime }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        left: 0
      }}
    >
      {lastRequestTime && (
        <Typography variant="body2">
          Last updated: {lastRequestTime.split(',')[0]} at{' '}
          {lastRequestTime.split(',')[1].trim()}
        </Typography>
      )}
    </Box>
  );
};

export default LastUpdated;

LastUpdated.propTypes = {
  lastRequestTime: propTypes.string.isRequired
};