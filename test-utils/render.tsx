import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { theme } from '../theme';
import messages from '@/src/locales/en.json';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <NextIntlClientProvider messages={messages as unknown as AbstractIntlMessages} locale="en">
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </NextIntlClientProvider>
    ),
  });
}
