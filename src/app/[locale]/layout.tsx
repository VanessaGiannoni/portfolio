import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { CookiesProvider } from 'next-client-cookies/server';
import { theme } from '../../../theme';
import SplashScreenProvider from '@/src/providers/SplashScreenProvider';

import '../../../styles/global.css';

export const metadata = {
  title: 'Vanessa Giannoni aka Vans',
  description: 'Vanessa Giannoni\'s portfolio showcasing web development projects.',
};

interface RootLayoutParams {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({ children, params }: RootLayoutParams) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/vans-logo.png" type="image/x-icon" />
        <link rel="canonical" href="https://vanessagiannoni.com" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=yes"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CookiesProvider>
            <MantineProvider theme={theme}>
              <SplashScreenProvider>{children}</SplashScreenProvider>
            </MantineProvider>
          </CookiesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
