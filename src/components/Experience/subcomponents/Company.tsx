'use client';

import { Title, Text } from '@mantine/core';
import SkillsBadge from './SkillsBadge';

interface CompanyProps {
  company: string;
  jobTitle: string;
  period: string;
  description: string;
  stack?: string[] | [];
}
export default function Company({ company, jobTitle, period, description, stack }: CompanyProps) {
  return (
    <article>
      <Title order={3} mt={45}>
        {company}
        <Text size="sm" mt={4} fw={500}>
          {jobTitle} - Period: {period}
        </Text>
      </Title>
      <Text pt={20}>{description}</Text>
      {stack && <SkillsBadge stack={stack} />}
    </article>
  );
}
