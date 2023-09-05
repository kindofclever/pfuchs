import { h1Variants, h2Variants } from '../../variants/variants';
import AnimatedTypography from '../../components/AnimatedTypography';

const LandingBanner = () => {
  return (
    <>
      <AnimatedTypography
        variant='h1'
        variants={h1Variants}
      >
        Hello there, my name is <span>Sandra Gufler</span> and I am a Web
        Developer!
      </AnimatedTypography>
      <AnimatedTypography
        variant='h2'
        variants={h2Variants}
      >
        Nice to see you here.
      </AnimatedTypography>
    </>
  );
};

export default LandingBanner;
