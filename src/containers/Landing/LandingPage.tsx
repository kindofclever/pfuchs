import { FC, useEffect, useState } from 'react';
import { Box, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import LandingBanner from './components/LandingBanner';
import CustomButton from '../../components/CustomButton';
import CookieConsent from '../../components/CookiesConsent';
import { buttonVariants } from '../../variants/variants';
import { CookieConsentStatus } from '../../types/types';

const imageURL =
  'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80';

const LandingPage: FC = () => {
  const navigate = useNavigate();

  const [consentStatus, setConsentStatus] =
    useState<CookieConsentStatus | null>(() => {
      const storedStatus = localStorage.getItem(
        'cookie-consent'
      ) as CookieConsentStatus | null;
      return storedStatus;
    });

  const isButtonEnabled =
    consentStatus === CookieConsentStatus.ACCEPTED ||
    consentStatus === CookieConsentStatus.DECLINED;

  const handleConsentChange = (status: CookieConsentStatus) => {
    setConsentStatus(status);
  };

  const handleClick = () => {
    if (isButtonEnabled) {
      navigate('/home');
    }
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
      }}>
      <LandingBanner />
      <motion.div
        initial='hidden'
        animate='visible'
        variants={buttonVariants}>
        <Tooltip
          title='Please make a decision about the cookies'
          placement='top'
          arrow>
          <span>
            <CustomButton
              btnType={'action'}
              onClick={handleClick}
              disabled={!isButtonEnabled}>
              Come In
            </CustomButton>
          </span>
        </Tooltip>
      </motion.div>

      <CookieConsent onConsentChange={handleConsentChange} />
    </Box>
  );
};

export default LandingPage;
