import React from 'react';
import { Box, Card, Divider, Typography, TextField, InputAdornment,  } from '@material-ui/core';
import { DateRange as DateRangeIcon } from '@material-ui/icons';
// import DateRange from '../dateRange';
import StatisticsText from './statisticsText';
import Graph from '../graph';
import useStyles from './styles';
import data from './data';

const statistics = [
  {
    numbers: '245/500',
    name: 'Attribute',
  },
  {
    numbers: '120',
    name: 'Attribute 1',
  },
  {
    numbers: '125',
    name: 'Attribute 2',
  },
  {
    numbers: '0',
    name: 'Attribute 3',
  }
];

function AnalyticsSection() {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <Box className={classes.content}>
        <Box className={classes.titleContainer}>
          <Box className={classes.titleWrapper}>
            <Typography className={classes.title} variant="subtitle1">
              Analytics
            </Typography>
          </Box>
          <Box className={classes.rangeSelectorWrapper}>
            <TextField
              size="small"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment className={classes.dateContainer} position="start">
                    <DateRangeIcon />
                  </InputAdornment>
                ),
              }}
              value="Tue, Aug 29, 2020 - Wed, Aug 30, 2020"
            />
            {/* <DateRange /> */}
          </Box>
        </Box>
        <Box className={classes.statisticsContainer}>
          {
            statistics.map((record, key) => (
              <Box key={record.name} className={classes.statisticsWrapper}>
                <StatisticsText numbers={record.numbers} name={record.name} />
                {(key < statistics.length - 1) && (
                  <Divider className={classes.divider} orientation='vertical' />
                )}
              </Box>
            ))
          }
        </Box>
        <Box className={classes.graphContainer}>
          <Graph data={data} />
        </Box>
      </Box>
    </Card>
  );
}

export default AnalyticsSection;
