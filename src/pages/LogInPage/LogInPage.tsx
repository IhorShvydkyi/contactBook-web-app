import { LogInForm } from '../../components/Forms/LogInForm/LogInForm';
import React from 'react';
import { LogInPageStyled } from './LogInPage.styled';

export const LogInPage = () => {
  return (
    <LogInPageStyled>
      <LogInForm />
    </LogInPageStyled>
  );
};
