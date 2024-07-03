'use client';

import { Container } from '@mantine/core';
import Header from '@/src/components/Header/Header';

export default function HomePage() {
  const containerProps = {
    h: 50,
    mt: 'sm',
    pr: 'xl',
    pl: 'xl',
  };

  return (
    <Container {...containerProps} fluid>
        <Header />
    </Container>
  );
}
