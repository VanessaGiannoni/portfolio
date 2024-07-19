'use client';

import { UnstyledButton } from '@mantine/core';
import Link from 'next/link';

import { useTranslations } from 'next-intl';
import classes from './resume-button.module.css';

export default function ResumeButton() {
  const t = useTranslations('header');
  return (
    <UnstyledButton
      className={classes.buttonBase}
      component={Link}
      href="/vanessa-resume.pdf"
      target="_blank"
      title="see_resume"
    >
      {t('see_resume')}
    </UnstyledButton>
  );
}
