import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { contactsOperations } from 'redux/contacts';
// import { getVisibleContact } from 'redux/contacts/contacts-selectors';

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
