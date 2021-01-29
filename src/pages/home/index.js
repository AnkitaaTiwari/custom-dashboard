import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { Box, Button, Card, Typography  } from '@material-ui/core';
import {
  DataUsageOutlined,
  SecurityOutlined,
  ListAltOutlined,
  FindInPageOutlined, 
} from '@material-ui/icons';

import AttributeCard from '../../components/attributeCard';
import GraphSection from '../../components/graphSection';
import Footer from '../../components/footer';
import useStyles from './styles';
import DateRange from '../../components/dateRange';

const attributeList = [
  {
    title: '245/500',
    subtitle: 'Attribute 1',
    icon: <DataUsageOutlined />
  },
  {
    title: '120',
    subtitle: 'Attribute 2',
    icon: <SecurityOutlined />
  },
  {
    title: '125',
    subtitle: 'Attribute 3',
    icon: <ListAltOutlined />
  },
  {
    title: '0',
    subtitle: 'Attribute 4',
    icon: <FindInPageOutlined />
  },
]

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <Box className={classes.content}>
      <Box mt={2} display='flex' justifyContent='flex-end'>
        <Button
          type="button"
          variant="contained" 
          color="primary"
          borderRadius='25px'
        >
          Upgrade
        </Button>
      </Box>
      <Box mt={2} display="flex" justifyContent="space-between">
        {
          attributeList.map((attribute) => (
            <AttributeCard
              key={attribute.title}
              icon={attribute.icon}
              title={attribute.title}
              subtitle={attribute.subtitle}
            />
          ))
        }
      </Box>
      <Box mt={2}>
        <GraphSection />
        <DateRange />
      </Box>
      <Footer />
    </Box>
  )
}

export default Home;
