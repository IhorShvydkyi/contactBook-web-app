import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './components/Container/Container';
import { AppBar } from './components/AppBar/AppBar';
import { HomePage } from './pages/HomePage/HomePage';
import { LogInPage } from './pages/LogInPage/LogInPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { authOperations } from './redux/auth';
import { PrivateRoute } from './components/Routes/PrivateRoute';
import { PublicRoute } from './components/Routes/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="logIn"
              element={
                <PublicRoute redirectPath="/contacts" restricted>
                  <LogInPage />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectPath="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </Suspense>
        <ToastContainer />
      </Container>
    </>
  );
};
