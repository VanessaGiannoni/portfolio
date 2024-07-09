'use client';

import { Title, Text, Container } from '@mantine/core';
import classes from './Welcome.module.css';
import useBreakpoint from '@/src/hooks/useBreakpoint';
import ResumeButton from '../ResumeButton/ResumeButton';

export function Welcome() {
  const isSmallScreen = useBreakpoint('md');

  return (
    <section className={classes.sectionContainer} id="home">
      <div className={classes.helloTitle}>
        <Title ta="left" mt={100} size={48} className={classes.helloTitle}>
          Hello there!{' '}
          <Text className={classes.thinFont} size="32px">
            <em>My name is...</em>
          </Text>
        </Title>
      </div>
      <Container>
        <div className={classes.nameTitle}>
          <Title className={classes.title} mt={100}>
            <strong>Vanessa Giannoni, or</strong>
            <Text inherit fs="italic" ta="left" className={classes.thinFont}>
              <strong>just</strong>&nbsp;<em>Vans</em>
            </Text>
          </Title>
        </div>
        <Text size="28px" mt="xl" fw={400}>
          And I&apos;m a builder! Well...something like that
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
