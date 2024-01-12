import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

import './reset.css';
import './main.css';
import { GuestView, SessionsPage, UserView } from 'pages';
import AppMainPage from 'pages/app-main-page/AppMainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestView />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
    ],
  },
  {
    path: '/app',
    element: <UserView />,
    children: [
      {
        path: '',
        element: <AppMainPage />,
      },
      {
        path: 'sessions',
        element: <SessionsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  </React.StrictMode>,
);
