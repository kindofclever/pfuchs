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

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box
      display='flex'
      height='100vh'
      flexDirection='column'
      bgcolor={theme.palette.primary.main}
      paddingX={5}
    >
      <AppBar
        position='static'
        sx={{ boxShadow: 'none' }}
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
      />

      <Box flexGrow={1}>{children}</Box>
    </Box>
  );
};

export default AppLayout;
