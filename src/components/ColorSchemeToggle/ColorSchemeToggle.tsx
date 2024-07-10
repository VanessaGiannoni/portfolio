'use client';

import { ActionIcon, Avatar, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import LightDarkIcon from '../icons/LightDarkIcon';
// import Unicorn from '../icons/Unicorn';
// import UnicornColored from '../icons/UnicornColored';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify="right" w={175}>
      <ActionIcon
        aria-label="toggle-theme"
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="transparent"
        color={computedColorScheme === 'light' ? 'black' : 'white'}
        size="xl"
      >
        <LightDarkIcon />
      </ActionIcon>
      <Avatar src="/vans-logo.png" alt="Vans" />
      {/* <ActionIcon
        variant="transparent"
        color={computedColorScheme === 'light' ? 'black' : 'white'}
        size="48px"
      >
        {computedColorScheme !== 'colored' ? <Unicorn /> : <UnicornColored />}
      </ActionIcon> */}
    </Group>
  );
}
