import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import SideBar from '../sideBar';
import TopBar from '../topBar';
import useStyles from './styles';

function Layout({ children }) {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <SideBar />
      <TopBar />
      <Box className={classes.content} ml={30} mt={9.5}>
        {children}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
