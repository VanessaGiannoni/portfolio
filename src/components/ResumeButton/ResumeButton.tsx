'use client';

import { UnstyledButton, useMantineColorScheme } from '@mantine/core';
import classes from './resume-button.module.css';

export default function ResumeButton() {
  const { colorScheme } = useMantineColorScheme();
  const buttonClass = colorScheme === 'light' ? classes.lightButton : classes.darkButton;

  return (
    <UnstyledButton
      className={`${buttonClass} ${classes.buttonBase}`}
    >
        See Resume
    </UnstyledButton>
  );
}
