// I18nWrapper.tsx
import { I18nProvider } from '@lingui/react';
import { setupI18n } from '@lingui/core';

import { useLanguage } from './Language';
import { ReactNode, useEffect } from 'react';
import { enMessages } from '../locale/en/messages';
import { deMessages } from '../locale/de/messages';

const i18n = setupI18n();

export const I18nWrapper = ({ children }: { children: ReactNode }) => {
  const { language } = useLanguage();

  useEffect(() => {
    switch (language) {
      case 'en':
        i18n.load('en', enMessages);
        i18n.activate('en');
        console.log('Language activated: en');

        break;
      case 'de':
        i18n.load('de', deMessages);
        i18n.activate('de');
        console.log('Language activated: de');

        break;
      default:
        console.warn(`Unsupported language: ${language}`);
    }
  }, [language]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};
