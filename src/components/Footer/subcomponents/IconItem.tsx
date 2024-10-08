'use client';

import { ActionIcon, useComputedColorScheme } from '@mantine/core';
import classes from './icon-item.module.css';
import useBreakpoint from '@/src/hooks/useBreakpoint';

interface IconItemProps {
  icon: React.ReactElement;
  href: string;
  socialMedia: string;
}

export default function IconItem({ icon, href, socialMedia }: IconItemProps) {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const isLargeScreen = useBreakpoint('lg');

  return (
    <ActionIcon
      aria-label={socialMedia}
      variant="transparent"
      size={isLargeScreen ? 'xl' : 'sm'}
      component="a"
      target="_blank"
      href={href}
      color={computedColorScheme === 'light' ? 'black' : 'white'}
      className={classes.iconItem}
    >
      {icon}
    </ActionIcon>
  );
}
