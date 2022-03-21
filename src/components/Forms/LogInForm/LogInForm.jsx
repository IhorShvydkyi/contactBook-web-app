import { Form, Label } from '../Forms.styled';

export const LogInForm = () => {
  return (
    <Form>
      <Label htmlFor="login">Login</Label>
      <input type="text" name="login" placeholder="input your login" />

      <Label htmlFor="password">Password</Label>
      <input type="text" name="password" placeholder="input your password" />

      <button type="submit">Log in</button>
    </Form>
  );
};
