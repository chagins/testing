import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('Render App tests', () => {
  test('Render "Hello world"', () => {
    render(<App />);
    const helloElement = screen.getByText(/Hello world/i);
    expect(helloElement).toBeInTheDocument();
  });

  test('Render "button"', () => {
    render(<App />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  test('Render "input"', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/^(input value)/i);
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('screen debug', () => {
    render(<App />);
    screen.debug();
  });
});
