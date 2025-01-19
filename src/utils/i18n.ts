'use client';

import { useParams } from 'next/navigation';
import en from '../locales/en.json';
import ja from '../locales/ja.json';

const translations = {
  en,
  ja,
};

export type Locale = keyof typeof translations;

export function useTranslations() {
  const params = useParams();
  const locale = (params?.locale || 'en') as Locale;
  const t = translations[locale];

  return {
    t,
    locale,
    isJapanese: locale === 'ja',
  };
} 