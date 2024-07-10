'use client';

import { Group } from '@mantine/core';
import ResumeButton from '../ResumeButton/ResumeButton';
import NavigationMenuDesktop from '../NavigationMenuDesktop/NavigationMenuDesktop';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import NavigationMenuMobile from '../NavigationMenuMobile/NavigationMenuMobile';
import useBreakpoint from '@/src/hooks/useBreakpoint';
import classes from './header.module.css';

export default function Header() {
  const isLargeScreen = useBreakpoint('md');

  return (
    <header className={classes.header}>
      <Group justify="space-between">
        {isLargeScreen ? (
          <>
            <ResumeButton />
            <NavigationMenuDesktop />
            <ColorSchemeToggle />
          </>
        ) : (
          <>
            <NavigationMenuMobile />
            <ColorSchemeToggle />
          </>
        )}
      </Group>
    </header>
  );
}
