import React from 'react';

import { DesktopWindows, WorkOutline, FileCopyOutlined } from '@material-ui/icons';
import { Box, Typography, Drawer, Tabs, Tab, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';

const menu = [
  {
    label: 'Menu Option 1',
    icon: <DesktopWindows />,
  },
  {
    label: 'Menu Option 2',
    id: <WorkOutline />,
  }, 
  {
    label: 'Menu Option 3',
    id: 'menu-option-3'
  },
  {
    label: 'Menu Option 4',
    id: 'menu-option-4'
  },
  {
    label: 'Menu Option 5',
    id: 'menu-option-5'
  },
  {
    label: 'Menu Option 6',
    icon: <FileCopyOutlined />,
  },
];


// {
//   label: 'Menu Option 7',
//   id: 'menu-option-7'
// },
// {
//   label: 'Settings',
//   id: 'settings'
// },

function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Drawer variant="permanent" anchor="left" >
      <Box className={classes.container}>
        <Box className={classes.title} titlecomponent="href">
          <Typography color="primary" variant="h5">
            LOGO HERE
          </Typography>
        </Box>
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
                <Tab label={menu.label} key={menu.label} />
              )
            })
          }
        </Tabs>
      </Box>
    </Drawer>
  )
}

export default Sidebar;
