import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { openModal } from 'redux/contacts/contacts-slices';

export const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button type="submit" onClick={() => dispatch(openModal(id))}>
              Edit
            </button>
            <button
              type="button"
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
