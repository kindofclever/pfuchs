import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import { useLanguage } from '../../contexts/Language';
import { Trans } from '@lingui/react';

interface LanguageMenuProps {
  anchorEl: null | HTMLElement;
  onClose: () => void;
}

const LanguageMenu: React.FC<LanguageMenuProps> = ({ anchorEl, onClose }) => {
  const { setLanguage } = useLanguage();

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}>
      <MenuItem
        onClick={() => {
          setLanguage('en');
          console.log('english');
          onClose();
        }}>
        <Trans id='English' />
      </MenuItem>
      <MenuItem
        onClick={() => {
          setLanguage('de');
          console.log('deutsch');
          onClose();
        }}>
        <Trans id='German' />
      </MenuItem>
    </Menu>
  );
};

export default LanguageMenu;
