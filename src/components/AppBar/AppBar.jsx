import { useSelector } from 'react-redux';
import { AuthNavavigation } from 'components/AppBar/AuthNav/AuthNavigation';
import { Navigation } from 'components/AppBar/Navigation/Navigation';
import { UserMenu } from 'components/AppBar/UserMenu/UserMenu';
import { AppBarStyled } from './AppBar.styled';
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
