'use client';

import { Group } from '@mantine/core';
import { useTranslations } from 'next-intl';
import classes from './navigation-menu-desktop.module.css';
import NavigationItem from './subcomponents/NavigationItem';

export default function NavigationMenuDesktop() {
  const t = useTranslations('header.navigation');
  const keys = ['home', 'about', 'experience'] as const;
  return (
    <Group>
      <ul className={classes.navList}>
        {keys.map((item) => (
            <NavigationItem
              href={t(`${item}.href`)}
              label={t(`${item}.label`)}
              key={t(`${item}.href`)}
            />
          )
        )}
      </ul>
    </Group>
  );
}
