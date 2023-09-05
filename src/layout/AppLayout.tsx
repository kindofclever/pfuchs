import { useState, FC, ReactNode } from 'react';
import { useTheme, Box, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SideNav from '../components/SideNav/SideNav';

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [bgColor, setBgColor] = useState(theme.palette.primary.main);

  const paletteColors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.warning.main,
    theme.palette.success.main,
    theme.palette.primary.dark,
    theme.palette.secondary.dark,
    theme.palette.warning.dark,
    theme.palette.success.dark,
    theme.palette.primary.light,
    theme.palette.secondary.light,
    theme.palette.warning.light,
    theme.palette.success.light,
  ];

  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * paletteColors.length);
    return paletteColors[randomIndex];
  };

  const handleListItemClick = () => {
    setBgColor(randomColor());
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box
      display='flex'
      height='100vh'
      flexDirection='column'
      bgcolor={bgColor}
      paddingX={5}
    >
      <AppBar
        position='static'
        sx={{ boxShadow: 'none', backgroundColor: bgColor }}
      >
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
