import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { authOperations } from 'redux/auth';
import { Form, Label } from '../Forms.styled';

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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="login">
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Label>

      <button type="submit">Log in</button>
    </Form>
  );
};
