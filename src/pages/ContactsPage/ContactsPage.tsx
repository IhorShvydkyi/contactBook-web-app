// @ts-expect-error TS(2307): Cannot find module 'components/Contacts/ContactEdi... Remove this comment to see the full error message
import { ContactEditModal } from 'components/Contacts/ContactEditModal/ContactEditModal';
// @ts-expect-error TS(2307): Cannot find module 'components/Contacts/ContactsFi... Remove this comment to see the full error message
import { ContactsFilter } from 'components/Contacts/ContactsFilter/ContactsFilter';
// @ts-expect-error TS(2307): Cannot find module 'components/Contacts/ContactsFo... Remove this comment to see the full error message
import { ContactsForm } from 'components/Contacts/ContactsForm/ContatcsForm';
// @ts-expect-error TS(2307): Cannot find module 'components/Contacts/ContactsLi... Remove this comment to see the full error message
import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';
import { ContactPageStyled } from './ContactsPage.styled';
import { useSelector } from 'react-redux';

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
