import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import SideBar from '../sideBar';
import TopBar from '../topBar';
import Footer from '../footer';
// import useStyles from './styles';

function Layout({ children }) {
  // const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <SideBar />
      <TopBar />
      <Box ml={30} mt={10.5}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
