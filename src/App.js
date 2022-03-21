import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { ToastContainer } from 'react-toastify';
// import Loader from 'react-loader-spinner';
import { AppBar } from 'components/AppBar/AppBar';
import { HomePageView } from 'pages/HomePage/HomePageView';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import './App.css';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';

export const App = () => {
  // const { LogInPage } = lazy(() => import('./pages/LogInPage/LogInPage'));

  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePageView />}></Route>
          <Route path="logIn" element={<LogInPage />}></Route>
          <Route path="register" element={<RegisterPage />}></Route>
        </Routes>
      </Suspense>
      {/* // <ToastContainer /> */}
    </>
  );
};
