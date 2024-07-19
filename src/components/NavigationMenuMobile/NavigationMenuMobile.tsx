'use client';

import { Menu, Burger } from '@mantine/core';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useTranslations } from 'next-intl';
import classes from './navigation-menu-mobile.module.css';
import NavigationItem from '../NavigationMenuDesktop/subcomponents/NavigationItem';

export default function NavigationMenuMobile() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [opened, { toggle }] = useDisclosure();
  const t = useTranslations('header.navigation');
  const keys = ['home', 'about', 'experience'] as const;

  return (
    <Menu
      shadow="sm"
      width="unset"
      classNames={classes}
      opened={openMenu}
      onChange={() => setOpenMenu(!openMenu)}
      withArrow
      arrowPosition="center"
      transitionProps={{ transition: 'fade', duration: 200 }}
    >
      <Menu.Target>
        <Burger
          lineSize={4}
          size="sm"
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <ul className={classes.navList}>
          {keys.map((item) => (
            <NavigationItem
              href={t(`${item}.href`)}
              label={t(`${item}.label`)}
              key={t(`${item}.href`)}
            />
          ))}
        </ul>
      </Menu.Dropdown>
    </Menu>
  );
}
