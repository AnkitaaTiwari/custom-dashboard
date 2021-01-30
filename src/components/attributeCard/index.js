import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Typography } from '@material-ui/core';
import useStyles from './styles';

function AttributeCard({ title, subtitle, icon }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardContainer}>
      <Box className={classes.content}>
        <Box className={classes.iconsSection}>
          <Box className={classes.circularBackground}>
            {icon}
          </Box>
        </Box>
        <Box className={classes.textSection}>
          <Box className={classes.textWrapper}>
            <Typography variant="body1" className={classes.title}>{title}</Typography>
            <Typography variant="body2" className={classes.subtext}>{subtitle}</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

AttributeCard.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  icon: PropTypes.node,
};

export default AttributeCard;
