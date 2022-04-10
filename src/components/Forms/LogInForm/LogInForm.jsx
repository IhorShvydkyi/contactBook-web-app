import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { authOperations } from 'redux/auth';
import {
  Form,
  Label,
  Input,
  FormButton,
  IconButton,
  RedirectMessage,
  RedirectLink,
} from '../Forms.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
    // navigate('/contacts', { replace: true });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label htmlFor="login">
          E-mail
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label htmlFor="password">
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <FormButton type="submit">
          Log In
          <IconButton />
        </FormButton>
      </Form>
      <RedirectMessage>
        If you don`t have an account, please{' '}
        <RedirectLink to="/register">register</RedirectLink>!
      </RedirectMessage>
    </div>
  );
};
