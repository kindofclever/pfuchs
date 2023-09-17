import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';
import { getRandomThemeColor } from '../../utils/getRandomThemeColor';
import { Trans } from '@lingui/react';
import { useThemeContext } from '../../contexts/Mode';
import { darkTheme, lightTheme } from '../../Theme';

const About: React.FC = () => {
  const { darkMode } = useThemeContext();
  const currentTheme = darkMode ? darkTheme : lightTheme;
  const [color, setColor] = useState(getRandomThemeColor(currentTheme));

  useEffect(() => {
    setColor(getRandomThemeColor(currentTheme));
  }, [currentTheme, darkMode]);

  return (
    <Container
      component='main'
      maxWidth='md'
      sx={{ mt: 5, mb: 5 }}>
      <Paper
        sx={{
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        elevation={5}>
        <Typography
          component='h1'
          variant='h1'
          sx={{ color: color }}>
          <Trans id='Soon you will be able to read more about me here' />
        </Typography>
        <Typography
          component='p'
          variant='subtitle1'
          sx={{ mt: 2 }}>
          <Trans id='Underconstruction' />
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent='center'
          sx={{ mt: 2 }}>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              href='#projects'>
              <Trans id='Nothing happens here' />
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              href='#contact'>
              <Trans id='Or here' />
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
