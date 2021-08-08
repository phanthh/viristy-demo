import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Team from './pages/Team';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/app',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Navigate to="/app/profile" replace /> },
        { path: 'profile', element: <Profile /> },
        { path: 'team', element: <Team /> },
        { path: 'events', element: <Events /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/app" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
