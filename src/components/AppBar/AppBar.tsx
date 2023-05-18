import { useSelector } from 'react-redux';
import React from 'react';

import { AuthNavavigation } from './AuthNav/AuthNavigation';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AppBarStyled } from './AppBar.styled';
import { authSelectors } from '../../redux/auth';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return (
    <AppBarStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavavigation />}
    </AppBarStyled>
  );
};
