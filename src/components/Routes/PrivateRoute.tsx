import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
export const PrivateRoute = ({ children, redirectPath = '/' }: any) => {
  // @ts-expect-error TS(2339): Property 'auth' does not exist on type 'DefaultRoo... Remove this comment to see the full error message
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <>{children}</> : <Navigate to={redirectPath} replace />;
};
