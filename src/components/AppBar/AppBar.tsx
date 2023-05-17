import { useSelector } from 'react-redux';
// @ts-expect-error TS(2307): Cannot find module 'components/AppBar/AuthNav/Auth... Remove this comment to see the full error message
import { AuthNavavigation } from 'components/AppBar/AuthNav/AuthNavigation';
// @ts-expect-error TS(2307): Cannot find module 'components/AppBar/Navigation/N... Remove this comment to see the full error message
import { Navigation } from 'components/AppBar/Navigation/Navigation';
// @ts-expect-error TS(2307): Cannot find module 'components/AppBar/UserMenu/Use... Remove this comment to see the full error message
import { UserMenu } from 'components/AppBar/UserMenu/UserMenu';
import { AppBarStyled } from './AppBar.styled';
// @ts-expect-error TS(2307): Cannot find module 'redux/auth' or its correspondi... Remove this comment to see the full error message
import { authSelectors } from 'redux/auth';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return (
    <AppBarStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavavigation />}
    </AppBarStyled>
  );
};
