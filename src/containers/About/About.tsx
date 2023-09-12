import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Avatar,
  Grid,
  Button,
  useTheme,
} from '@mui/material';
import { getRandomThemeColor } from '../../utils/getRandomThemeColor';

const About: React.FC = () => {
  const theme = useTheme();
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
          sx={{ color: getRandomThemeColor(theme) }}>
          Soon you will be able to read more about me here{' '}
        </Typography>
        <Typography
          component='p'
          variant='subtitle1'
          sx={{ mt: 2 }}>
          Under Construction
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
              Nothing happens here
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              href='#contact'>
              Or here
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
    // <Box sx={{ objectFit: 'contain' }}>
    //   <UnderConstruction />
    // </Box>
  );
};

export default About;
