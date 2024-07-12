import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import '../styles/global.css';
import SplashScreenProvider from '@/src/providers/SplashScreenProvider';

export const metadata = {
  title: 'Vanessa Giannoni aka Vans',
  description: 'Vanessa Giannoni aka Vans portfolio',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/vans-logo.png" type="image/x-icon" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <SplashScreenProvider>{children}</SplashScreenProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
