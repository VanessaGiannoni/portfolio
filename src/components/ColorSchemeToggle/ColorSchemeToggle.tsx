'use client';

import {
  ActionIcon,
  Avatar,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import LightDarkIcon from '../icons/LightDarkIcon';
import { Link } from '@/src/navigation';
// import Unicorn from '../icons/Unicorn';
// import UnicornColored from '../icons/UnicornColored';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const imageUrl = computedColorScheme === 'light' ? '/vans-logo.png' : '/logo-inverted.png';
  const theme = useMantineTheme();

  return (
    <Group justify="right">
      <ActionIcon
        aria-label="toggle-theme"
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="transparent"
        color={computedColorScheme === 'light' ? theme.black : theme.white}
        size="xl"
      >
        <LightDarkIcon />
      </ActionIcon>
      <Link aria-label="Go to home" href="/">
        <Avatar src={imageUrl} alt="Vans logo" />
      </Link>
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
