import React from 'react';
import { Nav, NavList, NavListItem, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavListItem>
        <NavListItem>
          <NavigationLink to="/contacts">Contacts</NavigationLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
};
