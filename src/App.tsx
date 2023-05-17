import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from './components/Container/Container';
// @ts-expect-error TS(2307): Cannot find module 'components/AppBar/AppBar' or i... Remove this comment to see the full error message
import { AppBar } from 'components/AppBar/AppBar';
// @ts-expect-error TS(2307): Cannot find module 'pages/HomePage/HomePage' or it... Remove this comment to see the full error message
import { HomePage } from 'pages/HomePage/HomePage';
// @ts-expect-error TS(2307): Cannot find module 'pages/LogInPage/LogInPage' or ... Remove this comment to see the full error message
import { LogInPage } from 'pages/LogInPage/LogInPage';
// @ts-expect-error TS(2307): Cannot find module 'pages/RegisterPage/RegisterPag... Remove this comment to see the full error message
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
// @ts-expect-error TS(2307): Cannot find module 'pages/ContactsPage/ContactsPag... Remove this comment to see the full error message
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
// @ts-expect-error TS(2307): Cannot find module 'redux/auth' or its correspondi... Remove this comment to see the full error message
import { authOperations } from 'redux/auth';
// @ts-expect-error TS(2307): Cannot find module 'components/Routes/PrivateRoute... Remove this comment to see the full error message
import { PrivateRoute } from 'components/Routes/PrivateRoute';
// @ts-expect-error TS(2307): Cannot find module 'components/Routes/PublicRoute'... Remove this comment to see the full error message
import { PublicRoute } from 'components/Routes/PublicRoute';

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
