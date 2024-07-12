'use client';

import { Timeline, Title, Avatar, Text } from '@mantine/core';
import SkillsBadge from './SkillsBadge';

interface TimeLineItemProps {
  title: string;
  jobTitle: string;
  period: string;
  src: string;
  altText: string;
  description: string;
  stack: [] | string[];
}

export default function TimeLineItem({
  title,
  jobTitle,
  period,
  src,
  altText,
  description,
  stack,
}: TimeLineItemProps) {
  return (
    <Timeline.Item
      title={
        <>
          <Title order={4} size={20}>
            {title}
          </Title>
          <Text size="xs" mt={4} fw={700}>
            {jobTitle} - {period}
          </Text>
        </>
      }
      lineVariant="dotted"
      bullet={<Avatar src={src} variant="filled" size={48} alt={altText} />}
    >
      <Text size="sm" pt={10}>
        {description}
      </Text>
      <SkillsBadge stack={stack} />
    </Timeline.Item>
  );
}
