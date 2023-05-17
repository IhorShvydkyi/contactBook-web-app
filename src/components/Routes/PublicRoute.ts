import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  children,
  redirectPath = '/',
  restricted = false
}: any) => {
  // @ts-expect-error TS(2339): Property 'auth' does not exist on type 'DefaultRoo... Remove this comment to see the full error message
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  if (shouldRedirect) {
    // @ts-expect-error TS(2749): 'Navigate' refers to a value, but is being used as... Remove this comment to see the full error message
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
