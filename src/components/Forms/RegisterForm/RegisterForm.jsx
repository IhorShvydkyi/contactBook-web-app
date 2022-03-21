import { Form, Label } from '../Forms.styled';

export const RegisterForm = () => {
  return (
    <Form>
      <Label htmlFor="name">Name</Label>
      <input type="text" name="login" placeholder="input your name" />
      <Label htmlFor="login">Login</Label>
      <input type="text" name="login" placeholder="input your login" />

      <Label htmlFor="password">Password</Label>
      <input type="text" name="password" placeholder="input your password" />

      <button type="submit">Log in</button>
    </Form>
  );
};
