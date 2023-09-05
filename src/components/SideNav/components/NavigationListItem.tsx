import React from 'react';
import { ListItem, ListItemText, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface NavigationListItemProps {
  title: string;
  redirectTo: string;
  onClick?: () => void;
}

const NavigationListItem: React.FC<NavigationListItemProps> = ({
  title,
  redirectTo,
  onClick,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${redirectTo}`);
    if (onClick) onClick();
  };

  return (
    <ListItem
      onClick={handleClick}
      sx={{ cursor: 'pointer', textAlign: 'center' }}
    >
      <ListItemText
        primary={title}
        sx={{ color: theme.palette.common.white }}
      />
    </ListItem>
  );
};

export default NavigationListItem;
