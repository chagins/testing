import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from 'pages/AppRouter';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';

export const renderWithProviders = ({
  component = null,
  initialEntry = '/',
}: {
  component?: React.ReactNode;
  initialEntry?: string;
}) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialEntry]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
