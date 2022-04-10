import { ContactEditModal } from 'components/Contacts/ContactEditModal/ContactEditModal';
import { ContactsFilter } from 'components/Contacts/ContactsFilter/ContactsFilter';
import { ContactsForm } from 'components/Contacts/ContactsForm/ContatcsForm';
import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';
import { ContactPageStyled } from './ContactsPage.styled';
import { useSelector } from 'react-redux';

export const ContactsPage = () => {
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
