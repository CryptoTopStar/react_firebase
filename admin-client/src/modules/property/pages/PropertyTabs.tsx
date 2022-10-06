import React from "react";
import { Box, Typography } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export function PropertyTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ bgcolor: 'background.paper', height: '100%' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}>
        <Tab label="General" icon={<FolderIcon sx={{ fontSize: 'xx-large' }} />} {...a11yProps(0)} />
        <Tab label="Corp Docs" icon={<FolderIcon sx={{ fontSize: 'xx-large' }} />} {...a11yProps(1)} />
        <Tab label="Rent/Income" icon={<FolderIcon sx={{ fontSize: 'xx-large' }} />} {...a11yProps(2)} />
        <Tab label="Expenses" icon={<FolderIcon sx={{ fontSize: 'xx-large' }} />} {...a11yProps(3)} />
        <Tab label="Financial Docs" icon={<FolderIcon sx={{ fontSize: 'xx-large' }} />} {...a11yProps(4)} />
        <Tab label="Agreement" icon={<FolderIcon sx={{ fontSize: 'xx-large' }} />} {...a11yProps(5)} />
      </Tabs>
    </Box>

  );
}