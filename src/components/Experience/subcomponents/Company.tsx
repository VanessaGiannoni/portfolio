'use client';

import { Title, Text } from '@mantine/core';

interface CompanyProps {
  company: string;
  jobTitle: string;
  period: string;
  description: string;
  stack?: string;
}
export default function Company({ company, jobTitle, period, description, stack }: CompanyProps) {
  return (
    <article>
      <Title order={3} mt={20}>
        {company}
        <Text size="sm" mt={4} fw={500}>
          {jobTitle} - Period: {period}
        </Text>
      </Title>
      <Text pt={20}>{description}</Text>
      <Text size="xs" mt={4} fw={700}>
        {stack}
      </Text>
    </article>
  );
}
