import React from 'react';
import { Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Colours: React.FC = () => {
  const theme = useTheme();

  const colors = [
    { label: 'Black', color: theme.palette.common.black },
    { label: 'White', color: theme.palette.common.white },
    { label: 'Primary Light', color: theme.palette.primary.light },
    { label: 'Primary', color: theme.palette.primary.main },
    { label: 'Primary Dark', color: theme.palette.primary.dark },
    { label: 'Secondary Light', color: theme.palette.secondary.light },
    { label: 'Secondary', color: theme.palette.secondary.main },
    { label: 'Secondary Dark', color: theme.palette.secondary.dark },
    { label: 'Error Light', color: theme.palette.error.light },
    { label: 'Error', color: theme.palette.error.main },
    { label: 'Error Dark', color: theme.palette.error.dark },
    { label: 'Success Light', color: theme.palette.success.light },
    { label: 'Success', color: theme.palette.success.main },
    { label: 'Success Dark', color: theme.palette.success.dark },
    { label: 'Warning Light', color: theme.palette.warning.light },
    { label: 'Warning', color: theme.palette.warning.main },
    { label: 'Warning Dark', color: theme.palette.warning.dark },
    { label: 'Grey 50', color: theme.palette.grey[50] },
    { label: 'Grey 100', color: theme.palette.grey[100] },
    { label: 'Grey 200', color: theme.palette.grey[200] },
    { label: 'Grey 300', color: theme.palette.grey[300] },
    { label: 'Grey 400', color: theme.palette.grey[400] },
    { label: 'Grey 500', color: theme.palette.grey[500] },
    { label: 'Grey 600', color: theme.palette.grey[600] },
    { label: 'Grey 700', color: theme.palette.grey[700] },
    { label: 'Grey 800', color: theme.palette.grey[800] },
    { label: 'Grey 900', color: theme.palette.grey[900] },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {colors.map(({ label, color }) => (
        <Button
          key={label}
          variant='contained'
          style={{ backgroundColor: color, color: theme.palette.common.white }}>
          {label}
        </Button>
      ))}
    </Box>
  );
};

export default Colours;
