import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { ToastContainer } from 'react-toastify';
// import Loader from 'react-loader-spinner';
import { AppBar } from 'components/AppBar/AppBar';
import { HomePageView } from 'pages/HomePage/HomePageView';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import './App.css';

export const App = () => {
  // const { LogInPage } = lazy(() => import('./pages/LogInPage/LogInPage'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AppBar />}></Route>
        <Route path="/" element={<HomePageView />}></Route>
        <Route path="logIn" element={<LogInPage />}></Route>
      </Routes>
    </Suspense>
    // <ToastContainer />
  );
};
