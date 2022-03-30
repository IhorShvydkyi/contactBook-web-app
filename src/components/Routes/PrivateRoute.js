import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
export const PrivateRoute = ({ children, redirectPath = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
