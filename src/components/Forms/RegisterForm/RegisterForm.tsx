import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// @ts-expect-error TS(2307): Cannot find module 'redux/auth' or its correspondi... Remove this comment to see the full error message
import { authOperations } from 'redux/auth';
import { Form, Label, Input, FormButton, IconButton } from '../Forms.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({
    target: { name, value }
  }: any) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    // navigate('/contacts', { replace: true });
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="name">
        Name
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </Label>

      <Label htmlFor="login">
        Email
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
        Sign up
        <IconButton />
      </FormButton>
    </Form>
  );
};
