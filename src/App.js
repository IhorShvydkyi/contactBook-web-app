import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { ToastContainer } from 'react-toastify';
// import Loader from 'react-loader-spinner';
import { Container } from './components/Container/Container';
import { AppBar } from 'components/AppBar/AppBar';
import { HomePage } from 'pages/HomePage/HomePage';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import './App.css';

export const App = () => {
  // const { LogInPage } = lazy(() => import('./pages/LogInPage/LogInPage'));

  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="logIn" element={<LogInPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
          </Routes>
        </Suspense>
        {/* // <ToastContainer /> */}
      </Container>
    </>
  );
};
