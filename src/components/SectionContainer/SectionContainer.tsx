'use client';

import classes from './section-container.module.css';

interface SectionContainerProps {
  children: React.ReactElement;
  id: string;
}

export default function SectionContainer({ children, id }: SectionContainerProps) {
  return (
    <section className={classes.sectionContainer} id={id}>
      {children}
    </section>
  );
}
