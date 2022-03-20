import { AuthNavavigation } from 'components/AuthNav/AuthNavigation';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBarStyled } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarStyled>
      <Navigation />
      <AuthNavavigation />
    </AppBarStyled>
  );
};
