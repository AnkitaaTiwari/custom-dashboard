import React from 'react'
import PropTypes from 'prop-types';
import { Popover, Box } from '@material-ui/core';

function RangeSelector({ anchorEl, onRangeChange, onClose }) {
  console.log('isOpen', anchorEl);
  return (
    <Popover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Box height={100} width={100}>
        wow
      </Box>
    </Popover>
  )
}

RangeSelector.propTypes = {
  anchorEl: PropTypes.node.isRequired,
  onRangeChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RangeSelector
