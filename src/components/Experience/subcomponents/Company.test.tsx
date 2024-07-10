import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Company from './Company';
import { render } from '@/test-utils/render';

describe('Company Component', () => {
  const mockProps = {
    company: 'Tech Corp',
    jobTitle: 'Software Engineer',
    period: 'Jan 2020 - Present',
    description: 'Developing cutting-edge solutions.',
    stack: 'React, Node.js, TypeScript',
  };

  test('renders company name, job title, and period', () => {
    render(<Company {...mockProps} />);
    expect(screen.getByText('Tech Corp')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer - Period: Jan 2020 - Present')).toBeInTheDocument();
  });

  test('renders description', () => {
    render(<Company {...mockProps} />);
    expect(screen.getByText('Developing cutting-edge solutions.')).toBeInTheDocument();
  });

  test('renders stack when provided', () => {
    render(<Company {...mockProps} />);
    expect(screen.getByText('React, Node.js, TypeScript')).toBeInTheDocument();
  });

  test('does not render stack when not provided', () => {
    const { stack, ...propsWithoutStack } = mockProps;
    render(<Company {...propsWithoutStack} />);
    expect(screen.queryByText('React, Node.js, TypeScript')).not.toBeInTheDocument();
  });
});
