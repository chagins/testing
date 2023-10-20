import { Route, Routes } from 'react-router-dom';
import { Layout } from 'pages/Layout';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { Users } from 'components/users/Users';
import { UserDetailsPage } from 'pages/UserDetailsPage';
import { ErrorPage } from 'pages/ErrorPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" index element={<AboutPage />} />
        <Route path="/users" index element={<Users />} />
        <Route path="/users/:id" index element={<UserDetailsPage />} />
        <Route path="/*" index element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
