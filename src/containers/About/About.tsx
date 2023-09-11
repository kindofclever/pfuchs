import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Avatar,
  Grid,
  Button,
} from '@mui/material';

const About: React.FC = () => {
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
        <Avatar
          src='https://via.placeholder.com/150'
          alt='Your Name'
          sx={{ width: 20, height: 20, mb: 2 }}
        />
        <Typography
          component='h1'
          variant='h4'>
          Your Name
        </Typography>
        <Typography
          component='p'
          variant='subtitle1'
          sx={{ mt: 2 }}>
          A passionate software developer with over X years of experience in
          full-stack development, cloud computing, and more. I have contributed
          to numerous projects that have impacted millions of users globally,
          and I'm always eager to take on new challenges and grow further.
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
              My Projects
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              href='#contact'>
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
