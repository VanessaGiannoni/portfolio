'use client';

import { Title } from '@mantine/core';
import useBreakpoint from '@/src/hooks/useBreakpoint';

interface props {
  title: string;
}

export default function SectionTitle({ title }: props) {
  const isLargeScreen = useBreakpoint('md');
  return (
    <div>
      <Title ta="left" mb={!isLargeScreen ? 20 : 40} size={!isLargeScreen ? 32 : 48} order={2}>
        {title}
      </Title>
    </div>
  );
}
