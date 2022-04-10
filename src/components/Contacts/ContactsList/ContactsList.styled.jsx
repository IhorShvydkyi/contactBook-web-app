import styled from '@emotion/styled';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

export const ContactListStyled = styled.ul`
  margin: 0 auto;
  width: 400px;
  /* display: flex;
  flex-direction: column; */
`;
export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactItemName = styled.span`
  width: 250px;
`;
export const EditButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 5px;
  margin-left: auto;
  margin-right: 10px;
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

export const EditIconButton = styled(FiEdit)`
  margin-left: 10px;
`;

export const DeleteButton = styled.button`
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

export const DeleteIconButton = styled(AiOutlineDelete)`
  margin-left: 10px;
`;
