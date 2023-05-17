import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 5, 0;
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 25px;
`;

export const NavListItem = styled.li`
  margin-right: 0px;
  margin-bottom: 10px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  &:active,
  &:hover {
    color: #e6e5be;
  }
`;
