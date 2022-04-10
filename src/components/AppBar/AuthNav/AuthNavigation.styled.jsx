import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNav = styled.nav`
  padding: 5, 0;
`;

export const AuthNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const AuthNavListItem = styled.li`
  margin-right: 10px;
  margin-bottom: 4px;
  &:not(:last-child) {
    margin-right: 4px;
  }
`;

export const AuthNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
`;
