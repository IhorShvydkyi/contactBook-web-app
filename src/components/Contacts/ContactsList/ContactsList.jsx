import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { openModal } from 'redux/contacts/contacts-slices';
import {
  ContactListStyled,
  ContactItem,
  ContactItemName,
  EditButton,
  EditIconButton,
  DeleteButton,
  DeleteIconButton,
} from './ContactsList.styled';

export const ContactsList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <ContactListStyled>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContactItemName>
              {name}: {number}{' '}
            </ContactItemName>
            <EditButton type="submit" onClick={() => dispatch(openModal(id))}>
              Edit
              <EditIconButton />
            </EditButton>
            <DeleteButton
              type="button"
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              Delete
              <DeleteIconButton />
            </DeleteButton>
          </ContactItem>
        ))}
      </ContactListStyled>
    </>
  );
};
