import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'tests/helpers';

describe('Navbar test', () => {
  test('about link test', async () => {
    renderWithProviders({ initialEntry: '/' });
    const aboutLink = screen.getByTestId('about-link');
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('users link test', async () => {
    renderWithProviders({ initialEntry: '/about' });
    const usersLink = screen.getByTestId('users-link');
    await userEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });

  test('link clicks', async () => {
    renderWithProviders({ initialEntry: '/users' });
    const mainLink = screen.getByTestId('main-link');
    await userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
