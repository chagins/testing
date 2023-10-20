import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header style={{ display: 'flex', gap: '10px' }}>
        <Link to="/" data-testid="main-link">
          main
        </Link>
        <Link to="/about" data-testid="about-link">
          about
        </Link>
        <Link to="/users" data-testid="users-link">
          users
        </Link>
      </header>
      <main data-testid="main">
        <Outlet />
      </main>
    </>
  );
};
