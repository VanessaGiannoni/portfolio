'use client';

import { Center, Flex, Stack, Text } from '@mantine/core';
import { FaHeart, FaLinkedin, FaMedium } from 'react-icons/fa';
import { PiCoffeeFill } from 'react-icons/pi';
import { FaSquareGithub } from 'react-icons/fa6';
import classes from './footer.module.css';
import IconItem from './subcomponents/IconItem';
import useBreakpoint from '@/src/hooks/useBreakpoint';

export default function Footer() {
  const isLargeScreen = useBreakpoint('lg');
  const actionIcons = [
    {
      icon: <FaSquareGithub size={isLargeScreen ? 48 : 24} />,
      href: 'https://github.com/VanessaGiannoni',
    },
    {
      icon: <FaMedium size={isLargeScreen ? 48 : 24} />,
      href: 'https://medium.com/@vanessa.o.giannoni',
    },
    {
      icon: <FaLinkedin size={isLargeScreen ? 48 : 24} />,
      href: 'https://www.linkedin.com/in/vanessa-osorio-giannoni/',
    },
  ];

  return (
    <footer className={classes.footer}>
      <div className={classes.emailContainer}>
        <Flex className={classes.emailWrapper} pl="sm" pr="sm">
          {isLargeScreen && <hr className={classes.verticalLine} />}
          <Text className={classes.text}>vanessa.o.giannoni@gmail.com</Text>
        </Flex>
      </div>
      <Center>
        <Stack>
          <Text className={classes.text}>
            Designed with <FaHeart /> by Sarah Giannoni
          </Text>
          <Text className={classes.text}>
            Developed with <PiCoffeeFill /> by Me{' '}
          </Text>
        </Stack>
      </Center>
      <Flex
        gap={!isLargeScreen ? 10 : 24}
        pl="sm"
        pr="sm"
        maw="100%"
        justify={!isLargeScreen ? 'center' : 'flex-end'}
        mt={!isLargeScreen ? '20px' : 0}
        align={!isLargeScreen ? '' : 'center'}
        className={classes.actionIconsContainer}
      >
        {isLargeScreen && <hr className={classes.line} />}
        {actionIcons.map((item) => (
          <IconItem icon={item.icon} href={item.href} />
        ))}
      </Flex>
    </footer>
  );
}
