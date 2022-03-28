import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
// import { ToastContainer } from 'react-toastify';
// import Loader from 'react-loader-spinner';
import { Container } from './components/Container/Container';
import { AppBar } from 'components/AppBar/AppBar';
import { HomePage } from 'pages/HomePage/HomePage';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { authOperations } from 'redux/auth';

export const App = () => {
  const dispatch = useDispatch();
  // const { LogInPage } = lazy(() => import('./pages/LogInPage/LogInPage'));
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
            <Route path="logIn" element={<LogInPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="contacts" element={<ContactsPage />}></Route>
          </Routes>
        </Suspense>
        {/* // <ToastContainer /> */}
      </Container>
    </>
  );
};
