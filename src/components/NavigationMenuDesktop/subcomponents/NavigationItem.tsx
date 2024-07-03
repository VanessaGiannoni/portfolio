'use client';

import { NavLink } from '@mantine/core';
import classes from './navigation-item.module.css';

interface NavigationItemProps {
  href: string;
  label: string
}

export default function NavigationItem({ href, label }: NavigationItemProps) {
  return (
    <li className={classes.navItem}>
      <NavLink
        href={href ?? '#'}
        label={label ?? 'Oops'}
        className={classes.root}
      />
    </li>
  );
}
