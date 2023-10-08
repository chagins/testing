import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

describe('"TOBE" tests', () => {
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

describe('"QUERY BY" tests', () => {
  test('nonexistent element', () => {
    render(<App />);
    const nonexistentElement = screen.queryByText(/nonexistent/i);
    expect(nonexistentElement).toBeNull();
  });
});

describe('"FIND BY" tests', () => {
  test('async element', async () => {
    render(<App />);
    // screen.debug();
    const dataElement = await screen.findByText(/data/i);
    expect(dataElement).toBeInTheDocument();
    expect(dataElement).toHaveStyle({ color: 'red' });
    // screen.debug();
  });
});

describe('"EVENT" tests', () => {
  test('click event', async () => {
    render(<App />);
    const btnToggle = screen.getByTestId('toggle-btn');
    expect(btnToggle).toBeInTheDocument();
    expect(screen.queryByTestId('toggled-element')).toBeNull();
    fireEvent.click(btnToggle);
    expect(screen.queryByTestId('toggled-element')).toBeInTheDocument();
    fireEvent.click(btnToggle);
    expect(screen.queryByTestId('toggled-element')).toBeNull();
  });

  test('input event', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/^(input value)/i);
    expect(input).toBeInTheDocument();
    expect(screen.queryByTestId('value-element')).toContainHTML('');
    // искуственное событие
    // fireEvent.input(input, {
    //   target: { value: '123123' },
    // });
    await userEvent.type(input, '123123');
    expect(screen.queryByTestId('value-element')).toContainHTML('123123');
  });
});
