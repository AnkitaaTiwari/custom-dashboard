import React from 'react';
import { Box, Card, Typography } from '@material-ui/core';
import DateRange from '../dateRange';
import StatisticsText from './statisticsText';
import useStyles from './styles';

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
]

function AnalyticsSection() {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <Box className={classes.content}>
        <Box className={classes.titleContainer}>
          <Box className={classes.titleWrapper}>
            <Typography variant="h6">
              Analytics
            </Typography>
          </Box>
          <Box className={classes.rangeSelectorWrapper}>
            <DateRange />
          </Box>
        </Box>
        <Box className={classes.statisticsContainer}>
          {
            statistics.map((record) => (
              <StatisticsText key={record.name} numbers={record.numbers} name={record.name} />    
            ))
          }
        </Box>
        <Box className={classes.graphContainer}>
          Graph
        </Box>
      </Box>
    </Card>
  )
}

export default AnalyticsSection;
