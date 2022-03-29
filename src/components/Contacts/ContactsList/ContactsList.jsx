import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContact } from 'redux/contacts/contacts-selectors';

export const ContactsList = () => {
  const items = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  // const filteredContacts = items.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase()),
  // );
  return (
    <>
      <ul>
        {items.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
