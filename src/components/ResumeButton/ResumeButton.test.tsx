import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResumeButton from './ResumeButton';
import { render } from '@/test-utils/render';

describe('ResumeButton Component', () => {
  it('renders with correct href and text', () => {
    render(<ResumeButton />);

    const buttonElement = screen.getByText('See resume');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', '/vanessa-resume.pdf');
    expect(buttonElement).toHaveClass('buttonBase');
  });
});
