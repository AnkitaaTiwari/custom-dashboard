import React from 'react';
import { Box, Button } from '@material-ui/core';
import {
  DataUsageOutlined,
  SecurityOutlined,
  ListAltOutlined,
  FindInPageOutlined, 
} from '@material-ui/icons';

import AttributeCard from '../../components/attributeCard';
import AnalyticsSection from '../../components/analyticsSection';
import Footer from '../../components/footer';
import useStyles from './styles';

const attributeList = [
  {
    title: '245/500',
    subtitle: 'Attribute 1',
    icon: <DataUsageOutlined fontSize='inherit' color="primary" />
  },
  {
    title: '120',
    subtitle: 'Attribute 2',
    icon: <SecurityOutlined fontSize='inherit' color="primary" />
  },
  {
    title: '125',
    subtitle: 'Attribute 3',
    icon: <ListAltOutlined fontSize='inherit' color="primary" />
  },
  {
    title: '0',
    subtitle: 'Attribute 4',
    icon: <FindInPageOutlined fontSize='inherit' color="primary" />
  },
]

function Home() {
  const classes = useStyles();
  
  return (
    <Box className={classes.homeContent}>
      <Box>
        <Box display='flex' justifyContent='flex-end'>
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.button}
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
        <Box mt={2} mb={4}>
          <AnalyticsSection />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
