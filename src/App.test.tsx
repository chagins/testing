import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('"TOBE" tests', () => {
  test('Render "Hello world"', () => {
    render(<App />);
    const helloElement = screen.getByText(/Hello world/i);
    expect(helloElement).toBeInTheDocument();
  });
});
