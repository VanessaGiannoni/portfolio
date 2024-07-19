'use client';

import { Title, Text, Container } from '@mantine/core';
import { useTranslations } from 'next-intl';
import classes from './Welcome.module.css';
import useBreakpoint from '@/src/hooks/useBreakpoint';
import ResumeButton from '../ResumeButton/ResumeButton';

export function Welcome() {
  const isSmallScreen = useBreakpoint('md');
  const t = useTranslations('welcome');

  return (
    <section className={classes.sectionContainer} id="home">
      <div className={classes.helloTitle}>
        <Title ta="left" mt={100} size={48} className={classes.helloTitle}>
          {t('description')}
          <Text className={classes.thinFont} size="32px">
            <em>{t('description_2')}</em>
          </Text>
        </Title>
      </div>
      <Container>
        <div className={classes.nameTitle}>
          <Title className={classes.title} mt={100}>
            <strong>{t('name')}</strong>&nbsp;<em className={classes.thinFont}>{t('nickname')}</em>
          </Title>
        </div>
        <Text size="28px" mt="xl" fw={400}>
          {t('slogan')}
        </Text>
      </Container>

      {!isSmallScreen && (
        <div className={classes.resumeButton}>
          <ResumeButton />
        </div>
      )}
    </section>
  );
}
