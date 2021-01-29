import React from 'react';
import { Box, Typography, Tabs, Tab } from '@material-ui/core';
import { SettingsOutlined } from '@material-ui/icons';
import useStyles from './styles';

const menu = [
  {
    label: 'Settings',
    icon: <SettingsOutlined/>,
  }
] 

function Settings() {
  const classes = useStyles();  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return ( 
    <Tabs
      orientation="vertical"
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      variant="fullWidth"
    >
      {
        menu.map((menu) => {
          console.log('menu', menu);
          return ( 
            <Tab label={menu.label} key={menu.label} icon={menu.icon} />
          )
        })
      }
    </Tabs>
  )
}

export default Settings;
