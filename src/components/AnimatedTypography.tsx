import { motion } from 'framer-motion';
import { Typography, TypographyProps } from '@mui/material';

interface AnimatedTypographyProps extends TypographyProps {
  variants: any;
  initial?: string;
  animate?: string;
}

const AnimatedTypography: React.FC<AnimatedTypographyProps> = ({
  variants,
  initial,
  animate,
  children,
  ...typographyProps
}) => {
  return (
    <motion.div
      initial={initial || 'hidden'}
      animate={animate || 'visible'}
      variants={variants}
    >
      <Typography {...typographyProps}>{children}</Typography>
    </motion.div>
  );
};

export default AnimatedTypography;
