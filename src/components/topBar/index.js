import React from 'react';
import { AppBar, Divider, Box, Button, Avatar, Typography } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import useStyles from './styles';

function TopBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color='transparent' position='fixed'>
      <Box mr={1} display='flex' flexDirection='row' justifyContent='flex-end'>
        <Divider orientation='vertical' variant='fullWidth' flexItem light='true' />
        <Button className={classes.button}>
          <Avatar className={classes.avatar} display='flex'>A</Avatar>
          <Box display="flex" flexDirection="column" alignItems="end">
            <Box display="flex">
              <Typography variant="body1" className={classes.userName}>
                Anthony Johnson
              </Typography>
              <ArrowDropDown fontSize='small' />
            </Box>
            <Typography variant="body2" className={classes.subtext}>
              Dummy Design.com
            </Typography>
          </Box>
        </Button>
        {/* <Divider orientation='vertical' variant='middle' flexItem light='true' />
        <Avatar className={classes.avatar} display='flex'>A</Avatar>
        <Box display='flex' flexDirection='column' justifyContent='center'>
          <Box ml={1} display='flex'  alignItems='center' fontSize='small' fontWeight='bold'>
            Anthony Johnson
            <ArrowDropDown className={classes.arrowDropDown} fontSize='small' />
          </Box>
          <Box display="flex" fontSize='extra-small'>
            Dummy Design.com
          </Box>
        </Box> */}
      </Box>
    </AppBar>
  )
}

export default TopBar;
