import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNav = styled.nav`
  padding: 5, 0;
`;

export const AuthNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 25px;
`;

export const AuthNavListItem = styled.li`
  margin-right: 0px;
  margin-bottom: 10px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  &:active,
  &:hover {
    color: #e6e5be;
  }
`;
