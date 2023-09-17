import { useState, useEffect, FC, ReactNode } from 'react';
import { useTheme, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SideNav from '../components/SideNav/SideNav';
import { getRandomThemeColor } from '../utils/getRandomThemeColor';
import { useThemeContext } from '../contexts/Mode';
import { darkTheme, lightTheme } from '../Theme';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const { darkMode } = useThemeContext();
  const currentTheme = darkMode ? darkTheme : lightTheme;

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [bgColor, setBgColor] = useState(getRandomThemeColor(currentTheme));

  useEffect(() => {
    setBgColor(getRandomThemeColor(currentTheme));
  }, [currentTheme, darkMode]);

  const handleListItemClick = () => {
    setBgColor(getRandomThemeColor(currentTheme));
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      bgcolor={bgColor}
      paddingX={5}
      minHeight='100vh'>
      <AppBar
        position='static'
        sx={{ boxShadow: 'none', backgroundColor: bgColor }}>
        <Toolbar>
          <Box flexGrow={1}></Box>
          {!isDrawerOpen && (
            <IconButton onClick={toggleDrawer}>
              <MenuIcon sx={{ color: theme.palette.common.white }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <SideNav
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        onListItemClick={handleListItemClick}
      />
      <Box flexGrow={1}>{children}</Box>
    </Box>
  );
};

export default AppLayout;
