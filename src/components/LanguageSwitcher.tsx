'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, useTranslations } from '../utils/i18n';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale } = useTranslations();
  const toggleLocale: Locale = locale === 'en' ? 'ja' : 'en';

  // Replace the current locale in the pathname with the new locale
  const newPathname = pathname?.replace(`/${locale}`, `/${toggleLocale}`) || `/${toggleLocale}`;

  return (
    <Link
      href={newPathname}
      className="fixed top-4 right-4 z-50 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
    >
      {toggleLocale === 'en' ? 'English' : '日本語'}
    </Link>
  );
} 