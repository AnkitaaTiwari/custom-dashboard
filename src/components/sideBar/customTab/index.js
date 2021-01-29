import React from 'react'
import PropTypes from 'prop-types';

import { Box, Tab } from '@material-ui/core';
import useStyles from './styles';

function CustomTab(props) {
  const { tabData } = props;

  const classes = useStyles(props);
  return (
    <Tab
      disableRipple
      className={classes.tab}
      label={(
        <Box className={classes.tabContent}>
          <Box className={classes.labelContainer}>
            <Box className={classes.iconContainer}>
              {tabData.icon}
            </Box>
            <Box className={classes.label}>
              {tabData.label}
            </Box>
          </Box>
          <Box className={classes.iconContainer}>
            {tabData.rightIcon}
          </Box>
        </Box>
      )}
    />
  );
}

CustomTab.propTypes = {
  height: PropTypes.number,
  background: PropTypes.string,
  color: PropTypes.string,
  tabData: PropTypes.shape({
    label: PropTypes.node,
    icon: PropTypes.node,
    rightIcon: PropTypes.node,
 })
};

export default CustomTab;
