import React from 'react'
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Box, Typography, IconButton } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import DaysOfWeek from '../daysOfWeek';
import Week from '../week';
import useStyles from './styles';

function DatePicker({ startDate, endDate }) {
  const classes = useStyles();
  return (
    <Box height="100%" width={210}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}  variant="dense">
          <IconButton color="inherit" aria-label="prev month">
            <KeyboardArrowLeft />
          </IconButton>
          <Typography variant="body1">
            Sept, 2020
          </Typography>
          <IconButton color="inherit" aria-label="next month">
            <KeyboardArrowRight />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DaysOfWeek />
      <Week />
      <Week />
      <Week />
      <Week />
      <Week />
      <Week />
    </Box>
  )
}

DatePicker.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
}

export default DatePicker
