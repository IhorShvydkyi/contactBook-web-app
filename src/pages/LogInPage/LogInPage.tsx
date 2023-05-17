// @ts-expect-error TS(2307): Cannot find module 'components/Forms/LogInForm/Log... Remove this comment to see the full error message
import { LogInForm } from 'components/Forms/LogInForm/LogInForm';
import { LogInPageStyled } from './LogInPage.styled';

export const LogInPage = () => {
  return (
    <LogInPageStyled>
      <LogInForm />
    </LogInPageStyled>
  );
};
