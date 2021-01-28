import React from 'react'
import PropTypes from 'prop-types';
import { Popover, Box } from '@material-ui/core';
import DatePicker from '../datePicker';
import ButtonGroup from '../buttonGroup'

function RangeSelector({ anchorEl, onRangeChange, onClose }) {
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
      <Box display="flex" height={250} width={520}>
        <DatePicker />
        <DatePicker />
        <ButtonGroup />
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
