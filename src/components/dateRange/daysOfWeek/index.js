import React from 'react'

import { AppBar, Toolbar, Box, Typography, IconButton } from '@material-ui/core';

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

function DaysOfWeek() {
  return (
    <Box display="flex">
      {DAYS.map((day, key) => (
        <Box textAlign="center" height={30} width={30}>
          <Typography color="primary" variant="subtitle1">
            {day}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default DaysOfWeek;
