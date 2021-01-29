import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';

function Footer() {
  const classes = useStyles();

  return (
    <Box mr={3} ml={35} mt={62} display='flex' flexDirection='row'>
      <Typography variant="body2" className={classes.subtext}>
        @ Copyright -  Dummy Design 2020 All Rights Reserved
      </Typography>
    </Box>
  )
}

export default Footer;
