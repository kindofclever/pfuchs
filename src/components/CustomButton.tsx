import { FC } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Styled variations of the button
const ActionButton = styled(MuiButton, {
  name: 'ActionBtn',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
  margin: '10px',
  padding: '15px 30px',
  textAlign: 'center',
  textTransform: 'uppercase',
  transition: '0.5s',
  backgroundSize: '200% auto',
  color: 'white',
  borderRadius: '10px',
  display: 'block',
  border: '0px',
  fontWeight: 700,
  boxShadow: '0px 0px 14px -7px ' + theme.palette.warning.main,
  backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 51%, ${theme.palette.warning.dark} 100%)`,
  cursor: 'pointer',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  '&:hover': {
    backgroundPosition: 'right center',
    color: '#fff',
    textDecoration: 'none',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

const NormalButton = styled(MuiButton, {
  name: 'NormalBtn',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
  margin: '10px',
  padding: '15px 30px',
  textAlign: 'center',
  textTransform: 'uppercase',
  transition: '0.3s',
  color: theme.palette.primary.contrastText,
  borderRadius: '10px',
  display: 'block',
  border: '0px',
  fontWeight: 700,
  boxShadow: '0px 0px 10px -5px ' + theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.main,
  cursor: 'pointer',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    textDecoration: 'none',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

const FadedButton = styled(MuiButton, {
  name: 'FadedBtn',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
  margin: '10px',
  padding: '15px 30px',
  textAlign: 'center',
  textTransform: 'uppercase',
  transition: '0.3s',
  color: theme.palette.grey[500],
  borderRadius: '10px',
  display: 'block',
  border: '0px',
  fontWeight: 700,
  boxShadow: '0px 0px 6px -3px ' + theme.palette.grey[400],
  backgroundColor: theme.palette.grey[200],
  cursor: 'pointer',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  touchAction: 'manipulation',
  opacity: 0.7,
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[600],
    textDecoration: 'none',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

type ButtonType = 'action' | 'normal' | 'faded';

const buttonMap: Record<ButtonType, React.ComponentType<ButtonProps>> = {
  action: ActionButton,
  normal: NormalButton,
  faded: FadedButton,
};

export interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  btnType: ButtonType;
}

export const CustomButton: FC<CustomButtonProps> = ({
  btnType,
  children,
  ...other
}) => {
  const SelectedButton = buttonMap[btnType];
  return <SelectedButton {...other}> {children} </SelectedButton>;
};

export default CustomButton;
