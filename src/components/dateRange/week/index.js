import React from 'react'

import { AppBar, Toolbar, Box, Typography, IconButton } from '@material-ui/core';

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

function Week() {
  return (
    <Box display="flex">
      {DAYS.map((day, key) => (
        <Box textAlign="center" height={30} width={30}>
          <Typography variant="subtitle2">
            {day}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default Week;
