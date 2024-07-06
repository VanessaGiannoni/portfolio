'use client';

import { Group } from '@mantine/core';
import classes from './navigation-menu-desktop.module.css';
import NavigationItem from './subcomponents/NavigationItem';

export const menuItems = [
  {
    href: '#home',
    label: 'Home',
  },
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#experience',
    label: 'Experience',
  },
  {
    href: '#blog',
    label: 'Blog',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
];

export default function NavigationMenuDesktop() {
  return (
    <Group>
      <ul className={classes.navList}>
        {menuItems.map((item) => (
          <NavigationItem href={item.href} label={item.label} />
        ))}
      </ul>
    </Group>
  );
}
