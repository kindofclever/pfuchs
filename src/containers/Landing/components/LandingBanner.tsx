import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { Box } from '@mui/material';

import { h1Variants, h2Variants } from '../../../variants/variants';
import AnimatedTypography from '../../../components/AnimatedTypography';

const LandingBanner: FC = () => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignContent='center'
      >
        <AnimatedTypography
          variant={isMobile ? 'h3' : 'h1'}
          variants={h1Variants}
          textAlign='center'
          mb={3}
          sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          Hello there, my name is <span>Sandra Gufler</span> and I am a
          {isMobile ? (
            <>
              <br />
            </>
          ) : (
            ' '
          )}{' '}
          Web Developer!
        </AnimatedTypography>
        <AnimatedTypography
          variant={isMobile ? 'h6' : 'h2'}
          variants={h2Variants}
          textAlign='center'
          sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          Nice to see you here.
        </AnimatedTypography>
      </Box>
    </>
  );
};

export default LandingBanner;
