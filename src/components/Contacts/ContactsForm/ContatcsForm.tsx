import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

import {
  Form,
  Label,
  Input,
  ContactFormButton,
  IconButton,
} from './ContatcsForm.styled';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (user.email) {
      dispatch(contactsOperations.fetchContacts());
    }
  }, [dispatch, user]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const nameToAdd = items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (nameToAdd) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(contactsOperations.addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor="password">
        Phone number
        <Input
          type="text	"
          name="number"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <ContactFormButton type="submit">
        Add to contact
        <IconButton />
      </ContactFormButton>
    </Form>
  );
};
