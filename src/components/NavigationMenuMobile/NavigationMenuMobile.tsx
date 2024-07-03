'use client';

import { Menu, Burger } from '@mantine/core';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import classes from './navigation-menu-mobile.module.css';
import { menuItems } from '../NavigationMenuDesktop/NavigationMenuDesktop';
import NavigationItem from '../NavigationMenuDesktop/subcomponents/NavigationItem';

export default function NavigationMenuMobile() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [opened, { toggle }] = useDisclosure();

  return (
    <Menu
      shadow="md"
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
          size="md"
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <ul className={classes.navList}>
            {menuItems.map((item) => (
              <NavigationItem href={item.href} label={item.label} />
            ))}
        </ul>
      </Menu.Dropdown>
    </Menu>
  );
}
