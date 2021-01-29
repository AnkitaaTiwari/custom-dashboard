import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card } from '@material-ui/core';
import useStyles from './styles';

function AttributeCard({ title, subtitle, icon }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <Box display="flex">
        <Box>{icon}</Box>
        <Box>
          <Box>{title}</Box>
          <Box>{subtitle}</Box>
        </Box>
      </Box>
    </Card>
  )
}

AttributeCard.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  icon: PropTypes.node,
};

export default AttributeCard;
