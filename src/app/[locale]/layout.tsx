import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import React from 'react';
import LanguageSwitchButton from '@/components/LanguageSwitchButton';
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LanguageSwitchButton selectedLanguageString='en'/>
          <p></p>
          <LanguageSwitchButton selectedLanguageString='de'/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}