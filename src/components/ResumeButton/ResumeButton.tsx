'use client';

import { UnstyledButton } from '@mantine/core';

import { useTranslations } from 'next-intl';
import { useCookies } from 'next-client-cookies';
import Link from 'next/link';
import classes from './resume-button.module.css';

export default function ResumeButton() {
  const t = useTranslations('header');
  const cookies = useCookies();
  const currentLocale = cookies.get('NEXT_LOCALE');

  let resumeUrl: string;
  switch (currentLocale) {
    case 'en':
      resumeUrl = '/vanessa-resume.pdf';
      break;
    case 'pt':
      resumeUrl = '/vanessa-resume-pt.pdf';
      break;
    case 'es':
      resumeUrl = '/vanessa-resume-es.pdf';
      break;
    default:
      resumeUrl = '/vanessa-resume.pdf';
      break;
  }

  return (
    <UnstyledButton
      className={classes.buttonBase}
      component={Link}
      href={resumeUrl}
      target="_blank"
      title="see_resume"
    >
      {t('see_resume')}
    </UnstyledButton>
  );
}
