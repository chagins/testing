import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Simple } from './Simple';

describe('"TOBE" tests', () => {
  test('Render "Hello world"', () => {
    render(<Simple />);
    const helloElement = screen.getByText(/Hello world/i);
    expect(helloElement).toBeInTheDocument();
  });

  test('Render "button"', () => {
    render(<Simple />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  test('Render "input"', () => {
    render(<Simple />);
    const input = screen.getByPlaceholderText(/^(input value)/i);
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  // test('screen debug', () => {
  //   render(<Simple />);
  //   screen.debug();
  // });
});

describe('"QUERY BY" tests', () => {
  test('nonexistent element', () => {
    render(<Simple />);
    const nonexistentElement = screen.queryByText(/nonexistent/i);
    expect(nonexistentElement).toBeNull();
  });
});

describe('"FIND BY" tests', () => {
  test('async element', async () => {
    render(<Simple />);
    // screen.debug();
    const dataElement = await screen.findByText(/data/i);
    expect(dataElement).toBeInTheDocument();
    expect(dataElement).toHaveStyle({ color: 'red' });
    // screen.debug();
  });
});

describe('"EVENT" tests', () => {
  test('click event', async () => {
    render(<Simple />);
    const btnToggle = screen.getByTestId('toggle-btn');
    expect(btnToggle).toBeInTheDocument();
    expect(screen.queryByTestId('toggled-element')).toBeNull();
    fireEvent.click(btnToggle);
    expect(screen.queryByTestId('toggled-element')).toBeInTheDocument();
    fireEvent.click(btnToggle);
    expect(screen.queryByTestId('toggled-element')).toBeNull();
  });

  test('input event', async () => {
    render(<Simple />);
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
