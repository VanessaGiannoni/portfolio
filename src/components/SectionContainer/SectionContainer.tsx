'use client';

import { Container } from '@mantine/core';
import classes from './section-container.module.css';

interface SectionContainerProps {
  children: React.ReactNode;
  id: string;
}

export default function SectionContainer({ children, id }: SectionContainerProps) {
  return (
    <section className={classes.sectionContainer} id={id}>
      <Container>{children}</Container>
    </section>
  );
}
