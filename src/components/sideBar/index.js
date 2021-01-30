import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  DesktopWindowsOutlined,
  AllInboxOutlined,
  WorkOutline,
  FileCopyOutlined,
  ViewCompactOutlined,
  MarkunreadMailboxOutlined,
  ArrowRightAlt,
  SettingsOutlined,
  Add as AddIcon, 
} from '@material-ui/icons';
import { Box, Typography, Drawer, Tabs, Tab } from '@material-ui/core';
import useStyles from './styles';
import CustomTab from './customTab';

const menuItems = [
  {
    label: 'Menu Option 1',
    icon: <DesktopWindowsOutlined fontSize="small" />,
  },
  {
    label: 'Menu Option 2',
    icon: <WorkOutline fontSize="small" />,
    rightIcon: <AddIcon fontSize="small" />,
  }, 
  {
    label: 'Menu Option 3',
    icon: <AllInboxOutlined fontSize="small" />,
    rightIcon: <AddIcon fontSize="small" />,
  },
  {
    label: 'Menu Option 4',
    icon: <ViewCompactOutlined fontSize="small" />,
  },
  {
    label: 'Menu Option 5',
    icon: <MarkunreadMailboxOutlined fontSize="small" />,
    rightIcon: <ArrowRightAlt fontSize="small" />,
  },
  {
    label: 'Menu Option 6',
    icon: <FileCopyOutlined fontSize="small" />,
  },
];

const settingsSize = 80;

function SideBar() {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log('handleChange', newValue);
    setValue(newValue);
  };
  
  function renderTab(item, key) {
    return (
      <Tab
        disableRipple
        className={classes.tab}
        isActive={key === value}
        label={(
          <Box className={classes.tabContent}>
            <Box className={classes.labelContainer}>
              <Box className={classes.iconContainer}>
                {item.icon}
              </Box>
              <Box className={classes.label}>
                {item.label}
              </Box>
            </Box>
            <Box className={classes.iconContainer}>
              {item.rightIcon}
            </Box>
          </Box>
        )}
      />
    );
  }

  return (
    <Drawer variant="permanent" anchor="left">
      <Box className={classes.container}>
        <Box width="100%">
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
              menuItems.map(renderTab)
            }
          </Tabs>
        </Box>
        <Box width="100%" display='flex' flexDirection='column' justifyContent='space-between'>
          <Box mb={0.5}>
            <Tabs
              orientation="vertical"
              indicatorColor="primary"
              variant="fullWidth"
            >
              <CustomTab
                background={theme.palette.primary.main}
                color="white"
                tabData={{
                  label: 'Menu Option 7',
                  icon: <MarkunreadMailboxOutlined fontSize="small" />,
                  rightIcon: <ArrowRightAlt fontSize="small" />,
                }}
              />
            </Tabs>
          </Box>
          <Box>
            <Tabs
              orientation="vertical"
              indicatorColor="primary"
              variant="fullWidth"
              TabIndicatorProps={{
                height: settingsSize
              }}
              value={0}
            >
              <CustomTab
                height={settingsSize}
                background={theme.palette.primary.light}
                tabData={{
                  label: 'Settings',
                  icon: <SettingsOutlined fontSize="small" />,
                }}
              />
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

export default SideBar;
