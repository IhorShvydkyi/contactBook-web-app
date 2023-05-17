import styled from '@emotion/styled';
import { HiUserAdd } from 'react-icons/hi';

export const Form = styled.form`
  width: 400px;
  margin: 100px 0;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 18px;
`;
export const Input = styled.input`
  margin-top: 10px;
  border-radius: 5px;
`;

export const ContactFormButton = styled.button`
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

export const IconButton = styled(HiUserAdd)`
  margin-left: 10px;
`;
