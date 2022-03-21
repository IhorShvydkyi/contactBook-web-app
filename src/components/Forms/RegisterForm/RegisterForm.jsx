export const RegisterForm = () => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" name="login" placeholder="input your name" />
      <label htmlFor="login">Login</label>
      <input type="text" name="login" placeholder="input your login" />

      <label htmlFor="password">Password</label>
      <input type="text" name="password" placeholder="input your password" />

      <button type="submit">Log in</button>
    </form>
  );
};
