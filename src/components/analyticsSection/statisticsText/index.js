import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Typography } from '@material-ui/core';
import useStyles from './styles';

function StatisticsText({ numbers, name }) {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Typography>
        {numbers}
      </Typography>
      <Typography>
        {name}
      </Typography>
    </Box>
  )
}

StatisticsText.propTypes = {
  numbers: PropTypes.string,
  name: PropTypes.string,
}

export default StatisticsText;
