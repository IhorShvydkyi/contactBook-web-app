import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 5, 0;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const NavListItem = styled.li`
  margin-right: 10px;
  margin-bottom: 4px;
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const NavigationLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
`;
