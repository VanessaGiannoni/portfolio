'use client';

import { UnstyledButton } from '@mantine/core';
import classes from './resume-button.module.css';

export default function ResumeButton() {
  return (
    <UnstyledButton
      className={classes.buttonBase}
    >
      See Resume
    </UnstyledButton>
  );
}
