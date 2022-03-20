import {
  AuthNav,
  AuthNavList,
  AuthNavListItem,
  AuthNavLink,
} from './AuthNavigation.styled';

export const AuthNavavigation = () => {
  return (
    <AuthNav>
      <AuthNavList>
        <AuthNavListItem>
          <AuthNavLink to="/logIn">Log in</AuthNavLink>
        </AuthNavListItem>
        <AuthNavListItem>
          <AuthNavLink to="/register">Register</AuthNavLink>
        </AuthNavListItem>
      </AuthNavList>
    </AuthNav>
  );
};
