import { ContactEditModal } from '../../components/Contacts/ContactEditModal/ContactEditModal';
import { ContactsFilter } from '../../components/Contacts/ContactsFilter/ContactsFilter';
import { ContactsList } from '../../components/Contacts/ContactsList/ContactsList';
import { ContactPageStyled } from './ContactsPage.styled';
import { useSelector } from 'react-redux';
import React from 'react';
import { ContactsForm } from '../../components/Contacts/ContactsForm/ContactsForm';

export const ContactsPage = () => {
  // @ts-expect-error TS(2339): Property 'contacts' does not exist on type 'Defaul... Remove this comment to see the full error message
  const showModal = useSelector(state => state.contacts.showModal);

  return (
    <ContactPageStyled>
      <ContactsForm />
      <ContactsFilter />
      <ContactsList />

      {showModal && <ContactEditModal />}
    </ContactPageStyled>
  );
};
