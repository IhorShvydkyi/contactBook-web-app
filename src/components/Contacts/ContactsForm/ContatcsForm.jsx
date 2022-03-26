import { Form, Label } from './ContactsForm.styled';

export const ContactsForm = () => {
  return (
    <Form autoComplete="off">
      <Label htmlFor="name">
        Name
        <input type="name" />
      </Label>

      <Label htmlFor="password">
        Phone number
        <input type="number" />
      </Label>
    </Form>
  );
};
