'use client';

import { Group } from '@mantine/core';
import ResumeButton from '../ResumeButton/ResumeButton';
import NavigationMenuDesktop from '../NavigationMenuDesktop/NavigationMenuDesktop';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import NavigationMenuMobile from '../NavigationMenuMobile/NavigationMenuMobile';
import useBreakpoint from '@/src/hooks/useBreakpoint';
import classes from './header.module.css';
import LocaleSelection from '../LocaleSelection/LocaleSelection';

export default function Header() {
  const isLargeScreen = useBreakpoint('md');

  return (
    <header className={classes.header}>
      <Group justify="space-between">
        {isLargeScreen ? (
          <>
            <ResumeButton />
            <NavigationMenuDesktop />
            <Group justify="right">
              <ColorSchemeToggle />
              <LocaleSelection />
            </Group>
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
