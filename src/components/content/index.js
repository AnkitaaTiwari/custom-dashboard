import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import useStyles from './styles';

function Content({ children }) {
  const classes = useStyles();

  return (
    <Box className={classes.content}>
      {children}
    </Box>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
