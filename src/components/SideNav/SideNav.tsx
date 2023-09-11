import { FC, useState } from 'react';
import { Box, Drawer, IconButton, List, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigationListItem from './components/NavigationListItem';
import { getRandomThemeColor } from '../../utils/getRandomThemeColor';

type SideNavProps = {
  isOpen: boolean;
  onClose: () => void;
  onListItemClick: () => void;
};

const SideNav: FC<SideNavProps> = ({ isOpen, onClose, onListItemClick }) => {
  const theme = useTheme();

  const [bgColor, setBgColor] = useState(getRandomThemeColor(theme));

  const drawerStyles = {
    width: '240px',
    flexShrink: 0,
    '& .MuiPaper-root': {
      backgroundColor: bgColor,
    },
  };

  const navigationItems = [
    { key: 'home', title: 'Home', redirectTo: 'home' },
    { key: 'about', title: 'About me', redirectTo: 'about' },
    { key: 'elevators', title: 'Elevator Simulation', redirectTo: 'elevators' },
    { key: 'skills', title: 'Skills', redirectTo: 'skills' },
    { key: 'downloads', title: 'Downloads', redirectTo: 'downloads' },
    { key: 'colours', title: 'Colours', redirectTo: 'colours' },
  ];

  return (
    <Drawer
      variant='temporary'
      anchor='right'
      open={isOpen}
      onClose={onClose}
      sx={drawerStyles}>
      <Box
        display='flex'
        justifyContent='center'
        p={1}>
        <IconButton onClick={onClose}>
          <CloseIcon sx={{ color: theme.palette.common.white }} />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <NavigationListItem
            key={item.redirectTo}
            title={item.title}
            redirectTo={item.redirectTo}
            onClick={() => {
              setBgColor(getRandomThemeColor(theme));
              onListItemClick();
              onClose();
            }}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default SideNav;
