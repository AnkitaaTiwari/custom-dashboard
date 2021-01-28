import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, useMediaQuery  } from '@material-ui/core';

import useStyles from './styles';
import DateRange from '../../components/dateRange';

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  
  return (
    <Box className={classes.content}>
      <DateRange />
    </Box>
  )
}

export default Home;
