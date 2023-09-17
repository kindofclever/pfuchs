import React, { useState, useEffect } from 'react';
import {
  Button,
  Snackbar,
  Slide,
  SlideProps,
  Theme,
  useTheme,
} from '@mui/material';
import { CookieConsentStatus } from '../types/types';
import { Trans } from '@lingui/react';

const SlideTransition: React.FC<SlideProps> = (props) => {
  return (
    <Slide
      {...props}
      direction='up'
    />
  );
};

interface CookieConsentProps {
  onConsentChange?: (status: CookieConsentStatus) => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onConsentChange }) => {
  const [show, setShow] = useState(false);
  const theme: Theme = useTheme();

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', CookieConsentStatus.ACCEPTED);
    setShow(false);
    console.log('cookieConsent accepted');
    if (onConsentChange) onConsentChange(CookieConsentStatus.ACCEPTED);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', CookieConsentStatus.DECLINED);
    setShow(false);
    console.log('cookieConsent denied');
    if (onConsentChange) onConsentChange(CookieConsentStatus.DECLINED);
  };

  return (
    <>
      <Snackbar
        open={show}
        TransitionComponent={SlideTransition}
        message='I use cookies to enhance your experience.'
        action={
          <>
            <Button
              color='secondary'
              size='small'
              onClick={handleAccept}>
              <Trans id='Accept' />
            </Button>
            <Button
              color='primary'
              size='small'
              onClick={handleDecline}>
              <Trans id='Decline' />
            </Button>
          </>
        }
        sx={{
          width: 'fit-content',
          '& .MuiSnackbarContent-root': {
            backgroundColor: theme.palette.grey[800],
          },
          '& .MuiButton-root': {
            color: theme.palette.common.white,
          },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
};

export default CookieConsent;
