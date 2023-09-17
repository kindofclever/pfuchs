// I18nWrapper.tsx
import { I18nProvider } from '@lingui/react';
import { setupI18n } from '@lingui/core';
import * as enMessagesModule from '../locale/en/messages';
import * as deMessagesModule from '../locale/de/messages';
import { useLanguage } from './Language';
import { ReactNode, useEffect } from 'react';

const i18n = setupI18n();

export const I18nWrapper = ({ children }: { children: ReactNode }) => {
  const { language } = useLanguage();
  const enMessages = enMessagesModule.messages;
  const deMessages = deMessagesModule.messages;

  useEffect(() => {
    switch (language) {
      case 'en':
        i18n.load('en', enMessages);
        i18n.activate('en');
        break;
      case 'de':
        i18n.load('de', deMessages);
        i18n.activate('de');
        break;
      default:
        console.warn(`Unsupported language: ${language}`);
    }
  }, [deMessages, enMessages, language]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};
