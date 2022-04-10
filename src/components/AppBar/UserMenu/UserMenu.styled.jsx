import styled from '@emotion/styled';
import { BiLogOutCircle } from 'react-icons/bi';

export const UserMenuStyled = styled.div`
  display: flex;
`;

export const UserMenuSpan = styled.span`
  font-size: 25px;
  margin-right: 20px;
`;

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 5px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  border: 1px solid #6b6b6b;
  background: rgba(255, 255, 255, 0.4);
  color: white;
  cursor: pointer;
  &:active,
  &:hover {
    color: #e6e5be;
  }
`;

export const IconButton = styled(BiLogOutCircle)`
  margin-left: 5px;
`;
