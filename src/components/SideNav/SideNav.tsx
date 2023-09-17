import { FC, useState } from 'react';
import { Box, Drawer, IconButton, List, useTheme } from '@mui/material';
import { Close, Translate } from '@mui/icons-material';
import NavigationListItem from './components/NavigationListItem';
import { getRandomThemeColor } from '../../utils/getRandomThemeColor';
import LanguageMenu from './LanguageMenu';
import { Trans } from '@lingui/react';

type SideNavProps = {
  isOpen: boolean;
  onClose: () => void;
  onListItemClick: () => void;
};

const SideNav: FC<SideNavProps> = ({ isOpen, onClose, onListItemClick }) => {
  const theme = useTheme();

  const [bgColor, setBgColor] = useState(getRandomThemeColor(theme));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const drawerStyles = {
    width: '240px',
    flexShrink: 0,
    '& .MuiPaper-root': {
      backgroundColor: bgColor,
    },
  };

  const navigationItems = [
    { key: 'home', title: <Trans id='Home' />, redirectTo: 'home' },
    { key: 'about', title: <Trans id='About me' />, redirectTo: 'about' },
    // { key: 'elevators', title: 'Elevator Simulation', redirectTo: 'elevators' },
    { key: 'skills', title: <Trans id='Skills' />, redirectTo: 'skills' },
    {
      key: 'downloads',
      title: <Trans id='Downloads' />,
      redirectTo: 'downloads',
    },
    { key: 'colours', title: <Trans id='Colours' />, redirectTo: 'colours' },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer
      variant='temporary'
      anchor='right'
      open={isOpen}
      onClose={onClose}
      sx={drawerStyles}>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        p={1}>
        <IconButton
          onClick={onClose}
          color='inherit'>
          <Close />
        </IconButton>
        <IconButton
          onClick={handleMenuOpen}
          color='inherit'>
          <Translate />
        </IconButton>
      </Box>

      <LanguageMenu
        anchorEl={anchorEl}
        onClose={handleMenuClose}
      />

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
