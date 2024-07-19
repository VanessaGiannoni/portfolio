import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Timeline } from '@mantine/core';
import TimeLineItem from './TimeLineItem';
import { render } from '@/test-utils/render';

describe('TimeLineItem Component', () => {
  const mockProps = {
    title: 'Project Alpha',
    jobTitle: 'Lead Developer',
    period: 'Jan 2021 - Dec 2021',
    src: '/GSK-logo.jpg',
    altText: 'Avatar for Project Alpha',
    description: 'Led a team of developers to build a cutting-edge project.',
    stack: ['React', 'Node.js', 'TypeScript'],
  };

  test('renders title, job title, and period', () => {
    render(
      <Timeline>
        <TimeLineItem {...mockProps} />
      </Timeline>
    );
    expect(screen.getByText('Project Alpha')).toBeInTheDocument();
    expect(screen.getByText('Lead Developer - Jan 2021 - Dec 2021')).toBeInTheDocument();
  });

  test('renders description', () => {
    render(
      <Timeline>
        <TimeLineItem {...mockProps} />
      </Timeline>
    );
    expect(
      screen.getByText('Led a team of developers to build a cutting-edge project.')
    ).toBeInTheDocument();
  });

  test('renders stack badges', () => {
    render(
      <Timeline>
        <TimeLineItem {...mockProps} />
      </Timeline>
    );
    mockProps.stack.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  test('renders avatar with correct src and alt text', () => {
    render(
      <Timeline>
        <TimeLineItem {...mockProps} />
      </Timeline>
    );
    const avatar = screen.getByAltText('Avatar for Project Alpha');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', '/GSK-logo.jpg');
  });
});
