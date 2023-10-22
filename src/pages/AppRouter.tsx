import { Route, Routes } from 'react-router-dom';
import { Layout } from 'pages/Layout';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { Users } from 'components/users/Users';
import { UserDetailsPage } from 'pages/UserDetailsPage';
import { ErrorPage } from 'pages/ErrorPage';
import { UsersE2e } from 'components/users-e2e/UsersE2e';
import { HelloWorldPage } from './HelloWorldPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/hello" element={<HelloWorldPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/users-e2e" element={<UsersE2e />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
