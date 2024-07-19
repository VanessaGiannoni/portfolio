'use client';

import { Spoiler, Timeline } from '@mantine/core';
import { FaChevronCircleDown, FaChevronCircleUp } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import classes from './experience.module.css';
import TimeLineItem from './subcomponents/TimeLineItem';
import Company from './subcomponents/Company';

export default function Experience() {
  const t = useTranslations('experience');
  const keys = [
    'arctouch.timeline.trupanion',
    'arctouch.timeline.gsk_ttf_2',
    'arctouch.timeline.zoho',
    'arctouch.timeline.hp',
    'arctouch.timeline.bonecoin',
    'arctouch.timeline.gsk_ttf',
  ] as const;

  const projectStack = [
    {
      stack: [
        'TypeScript',
        'Next.js',
        'Jest',
        'Node.js',
        'Zod',
        'Stripe',
        'CSS-in-JS',
        'Mantine',
        'Git',
        'Azure',
        'Contentful',
        'Tech detailing',
        'Architecture',
        'Server-side rendering (SSR)',
        'Client-side rendering (CSR)',
      ],
    },
    {
      stack: ['Nuxt.js', 'Scss', 'Static Site Generation (SSG)', 'Git', 'GitHub'],
    },
    {
      stack: ['Python3', 'PyTest', 'Pandas', 'Google Sheets API', 'Git', 'GitHub'],
    },
    {
      stack: [
        'TypeScript',
        'React.js',
        'Jest',
        'CSS-in-JS',
        'Scss',
        'Webpacks',
        'Micro Front Ends (MFE)',
        'Documentation',
        'Git',
        'GitHub',
      ],
    },
    {
      stack: ['TypeScript', 'React.js', 'CSS-in-JS', 'Scss', 'WebApp', 'Git', 'GitHub'],
    },
    {
      stack: ['JavaScript', 'Nuxt.js', 'Scss', 'Git', 'GitHub', 'Static-Site Generation (SSG)'],
    },
  ];

  const showLabel = (
    <span className={classes.spoilerLabelWrapper}>
      Show more <FaChevronCircleDown />
    </span>
  );

  const hideLabel = (
    <span className={classes.spoilerLabelWrapper}>
      Hide <FaChevronCircleUp />
    </span>
  );

  return (
    <SectionContainer id="experience">
      <SectionTitle title={t('section_title')} />
      <Company
        company={t('arctouch.company')}
        jobTitle={t('arctouch.job_title')}
        period={t('arctouch.period')}
        description={t('arctouch.description')}
      />
      <br />
      <Spoiler hideLabel={hideLabel} showLabel={showLabel} maxHeight={170} classNames={classes}>
        <Timeline
          bulletSize={48}
          lineWidth={2}
          autoContrast
          classNames={classes}
          active={1}
          mb={25}
        >
          {keys.map((item, index) => {
            const stack = projectStack[index]?.stack || [];

            return (
              <TimeLineItem
                title={t(`${item}.title`)}
                jobTitle={t(`${item}.jobTitle`)}
                period={t(`${item}.period`)}
                src={t(`${item}.src`)}
                altText={t(`${item}.altText`)}
                description={t(`${item}.description`)}
                stack={stack}
                key={t(`${item}.period`)}
              />
            );
          })}
        </Timeline>
      </Spoiler>

      <Company
        company={t('lm_sistemas.company')}
        jobTitle={t('lm_sistemas.job_title')}
        period={t('lm_sistemas.period')}
        description={t('lm_sistemas.description')}
        stack={['React.js', 'JavaScript', 'React bootstrap', 'Figma', 'UX/UI', 'TortoiseSVN']}
      />
      <Company
        company={t('ninsaude.company')}
        jobTitle={t('ninsaude.job_title')}
        period={t('ninsaude.period')}
        description={t('ninsaude.description')}
        stack={[
          'PHP 7+',
          'JavaScript',
          'jQuery',
          'CSS3',
          'HTML5',
          'Bootstrap',
          'Git',
          'Bitbucket',
          'RestAPI',
          'MySQL',
        ]}
      />
      <Company
        company={t('goes.company')}
        jobTitle={t('goes.job_title')}
        period={t('goes.period')}
        description={t('goes.description')}
        stack={[
          'PHP 5+',
          'JavaScript',
          'jQuery',
          'CSS3',
          'HTML5',
          'Bootstrap',
          'Laravel 5.2',
          'RestAPI',
          'MySQL',
        ]}
      />
    </SectionContainer>
  );
}
