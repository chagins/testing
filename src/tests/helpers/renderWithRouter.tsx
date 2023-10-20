import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from 'pages/AppRouter';
import { render } from '@testing-library/react';

export const renderWithRouter = ({
  component = null,
  initialEntry = '/',
}: {
  component?: React.ReactNode;
  initialEntry?: string;
}) => {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
