import { renderWithProviders } from 'tests/helpers';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

describe('Counter tests', () => {
  test('Test increment, decrement buttons', () => {
    const { getByTestId } = renderWithProviders({});
    screen.debug();
    const incrementBtn = getByTestId('increment-btn');
    const decrementBtn = getByTestId('decrement-btn');
    expect(getByTestId('value-title')).toHaveTextContent('0');
    userEvent.click(incrementBtn);
    expect(getByTestId('value-title')).toHaveTextContent('1');
    userEvent.click(decrementBtn);
    expect(getByTestId('value-title')).toHaveTextContent('0');
  });
});
