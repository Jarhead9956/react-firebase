import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import MyNotes from './pages/MyNotes';
import NoteDetails from './pages/NoteDetails';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <MyNotes />},
      {path: '/:noteId', element: <NoteDetails />},
      {path: '/login', element: <LoginPage />},
      {path: '/register', element: <RegisterPage />}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
