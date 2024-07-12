'use client';

import { Badge, Group, Text, useComputedColorScheme, useMantineTheme } from '@mantine/core';

interface SkillsBadgeProps {
  stack: string[] | [];
}

export default function SkillsBadge({ stack }: SkillsBadgeProps) {
  const colorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const theme = useMantineTheme();
  const badgeColor = colorScheme === 'light' ? theme.black : theme.white;

  return (
    <Group gap={5} mt={10}>
      <Text size="xs" fw={700}>
        Skills:
      </Text>
      {stack.map((item, index) => (
        <Badge color={badgeColor} autoContrast variant="outline" radius="sm" key={index}>
          {item}
        </Badge>
      ))}
    </Group>
  );
}
