'use client';

import { Group, Image, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';
import classes from './about.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionContainer from '../SectionContainer/SectionContainer';

export default function About() {
  const t = useTranslations('about');
  return (
    <SectionContainer id="about">
      <SectionTitle title={t('section_title')} />
      <Group justify="space-between" align="flex-start" gap="lg">
        <article className={classes.textContainer}>
          <Text>{t('description')}</Text>
          <br />
          <Text>{t('description_2')}</Text>
          <br />
          <Text fw={600}>{t('small_description')}</Text>
        </article>
        <div>
          <Image
            radius="md"
            h={300}
            w={300}
            src="/profile-pic.jpeg"
            className={classes.imageFilter}
            alt="Vans happy taking a good cup of coffee"
          />
        </div>
      </Group>
    </SectionContainer>
  );
}
