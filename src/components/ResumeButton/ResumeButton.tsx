'use client';

import { UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import classes from './resume-button.module.css';

export default function ResumeButton() {
  return (
    <UnstyledButton
      className={classes.buttonBase}
      component={Link}
      href="/vanessa-resume.pdf"
      target="_blank"

    >
      See Resume
    </UnstyledButton>
  );
}
