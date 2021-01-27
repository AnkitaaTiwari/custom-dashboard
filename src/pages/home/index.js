import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, useMediaQuery  } from '@material-ui/core';
import DateRange from '../../components/dateRange';

function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  
  return (
    <Box>
      <DateRange />
    </Box>
  )
}

export default Home;
