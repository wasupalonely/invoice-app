import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GenericButton from './GenericButton';
import {expect, jest, test} from '@jest/globals';

test('renders the button with the correct title', () => {
  render(<GenericButton onClick={() => {}} title="Click Me" bgColor="blue" />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass('bg-blue-500');
});

test('calls onClick when the button is clicked', () => {
  const handleClick = jest.fn();
  render(<GenericButton onClick={handleClick} title="Click Me" bgColor="blue" />);
  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});