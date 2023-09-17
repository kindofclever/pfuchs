import { FC, useEffect, useState } from 'react';
import { Box, Drawer, IconButton, List, useTheme } from '@mui/material';
import { Close, DarkMode, LightMode, Language } from '@mui/icons-material';
import NavigationListItem from './components/NavigationListItem';
import { getRandomThemeColor } from '../../utils/getRandomThemeColor';
import LanguageMenu from './components/LanguageMenu';
import { Trans } from '@lingui/react';
import { useThemeContext } from '../../contexts/Mode';
import { darkTheme, lightTheme } from '../../Theme';

type SideNavProps = {
  isOpen: boolean;
  onClose: () => void;
  onListItemClick: () => void;
};

const SideNav: FC<SideNavProps> = ({ isOpen, onClose, onListItemClick }) => {
  const theme = useTheme();
  const { darkMode, toggleTheme } = useThemeContext();
  const currentTheme = darkMode ? darkTheme : lightTheme;

  const [bgColor, setBgColor] = useState(getRandomThemeColor(currentTheme));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    setBgColor(getRandomThemeColor(currentTheme));
  }, [currentTheme, darkMode]);

  const drawerStyles = {
    width: '240px',
    color: theme.palette.common.white,
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
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        p={1}>
        <IconButton
          sx={{ color: theme.palette.common.white }}
          onClick={onClose}>
          <Close />
        </IconButton>
        <IconButton
          sx={{ color: theme.palette.common.white }}
          onClick={handleMenuOpen}>
          <Language />
        </IconButton>
        <IconButton
          sx={{ color: theme.palette.common.white }}
          onClick={toggleTheme}>
          {darkMode ? <LightMode /> : <DarkMode />}
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
              setBgColor(getRandomThemeColor(currentTheme));
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
