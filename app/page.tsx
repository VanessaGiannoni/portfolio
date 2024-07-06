'use client';

import { Container } from '@mantine/core';
import Header from '@/src/components/Header/Header';
import { Welcome } from '@/src/components/Welcome/Welcome';
import Footer from '@/src/components/Footer/Footer';

export default function HomePage() {
  const containerProps = {
    h: 50,
    mt: 'sm',
  };

  return (
    <main>
      <Container {...containerProps} fluid>
        <Header />
        <Welcome />
        <Footer />
      </Container>
    </main>
  );
}
