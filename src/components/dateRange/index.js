import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DateRange as DateRangeIcon } from '@material-ui/icons';
import { Box, TextField, InputAdornment, Typography } from '@material-ui/core';
import RangeSelector from './rangeSelector';
import useStyles from './styles';

function DateRange() {
  const classes = useStyles();
  let [dateRangeStates, setDateRangeStates] = useState({
    isDropdownOpen: false,
    startDate: 'startDate',
    endDate: 'endDate',
    anchorEl: null,
  });
  // let isDropdownOpen = useState(false);

  function toggleDropdown(e) {
    setDateRangeStates((currentState) =>
      ({
        ...currentState,
        isDropdownOpen: false,
        anchorEl: !!currentState.anchorEl ? null : e.currentTarget,
      }));
  }

  function handleRangeChange() {
    console.log('handleRangeChange');
  }

  console.log('dateRangeStates', dateRangeStates);

  return (
    <Box mt={2} display="flex" flexDirection="column" justifyContent="center">
      <TextField
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <DateRangeIcon />
            </InputAdornment>
          ),
          }}
        value="Tueksjdcij"
        onClick={toggleDropdown}
      />
      <RangeSelector
        anchorEl={dateRangeStates.anchorEl}
        onRangeChange={handleRangeChange}
        onClose={toggleDropdown}
      />
    </Box>
  );
}

DateRange.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default DateRange;
