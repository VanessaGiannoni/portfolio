'use client';

import { Container, ScrollArea, Space } from '@mantine/core';
import Header from '@/src/components/Header/Header';
import { Welcome } from '@/src/components/Welcome/Welcome';
import Footer from '@/src/components/Footer/Footer';
import About from '@/src/components/About/About';
import Experience from '@/src/components/Experience/Experience';

export default function HomePage() {
  const containerProps = {
    h: 50,
    mt: 'sm',
  };

  return (
    <main>
      <Container {...containerProps} fluid>
        <Header />
        <ScrollArea scrollbars="y">
          <Welcome />
          <Space h="lg" />
          <About />
          <Experience />
        </ScrollArea>
        <Footer />
      </Container>
    </main>
  );
}
