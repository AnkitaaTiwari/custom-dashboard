import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import useStyles from './styles';

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Divider variant="fullWidth" />
      <Box className={classes.subtextContainer}>
        <Typography variant="body2" className={classes.subtext}>
          @ Copyright -  Dummy Design 2020 All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
