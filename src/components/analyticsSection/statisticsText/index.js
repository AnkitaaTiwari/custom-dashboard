import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';

function StatisticsText({ numbers, name }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.numbers} variant="subtitle1">
        {numbers}
      </Typography>
      <Typography className={classes.name} variant="body2">
        {name}
      </Typography>
    </Box>
  );
}

StatisticsText.propTypes = {
  numbers: PropTypes.string,
  name: PropTypes.string,
};

export default StatisticsText;
