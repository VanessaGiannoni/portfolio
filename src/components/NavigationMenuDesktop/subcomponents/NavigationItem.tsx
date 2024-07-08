'use client';

import { NavLink } from '@mantine/core';
import Link from 'next/link';
import { useEffect } from 'react';
import classes from './navigation-item.module.css';

interface NavigationItemProps {
  href: string;
  label: string;
}

export default function NavigationItem({ href, label }: NavigationItemProps) {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const link = document.querySelector(`a[href="${href}"]`);
    if (link) {
      link.addEventListener('click', handleScroll);
    }

    return () => {
      if (link) {
        link.removeEventListener('click', handleScroll);
      }
    };
  }, [href]);

  return (
    <li className={classes.navItem}>
      <NavLink component={Link} href={href ?? '#'} label={label ?? 'Oops'} className={classes.root} />
    </li>
  );
}
