import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'tests/helpers';
import { App } from './App';

describe('App tests', () => {
  test('Router correct', async () => {
    renderWithProviders({});
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    expect(mainLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    await userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('Router incorrect', async () => {
    render(
      <MemoryRouter initialEntries={['/de3dawed2']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
