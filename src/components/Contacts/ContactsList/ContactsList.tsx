import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from '../../../redux/contacts';
import { openModal } from '../../../redux/contacts/contacts-slices';
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
  // @ts-expect-error TS(2339): Property 'contacts' does not exist on type 'Defaul... Remove this comment to see the full error message
  const items = useSelector(state => state.contacts.items);
  // @ts-expect-error TS(2339): Property 'contacts' does not exist on type 'Defaul... Remove this comment to see the full error message
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const filteredContacts = items.filter((contact: any) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {filteredContacts.length === 0 ? (
        <p>Oops, there is no such contact in your phone!</p>
      ) : (
        <ContactListStyled>
          {filteredContacts.map(({ id, name, number }: any) => (
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
      )}
    </>
  );
};
