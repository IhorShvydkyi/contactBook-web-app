import { ContactEditModal } from 'components/Contacts/ContactEditModal/ContactEditModal';
import { ContactsFilter } from 'components/Contacts/ContactsFilter/ContactsFilter';
import { ContactsForm } from 'components/Contacts/ContactsForm/ContatcsForm';
import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';
import { useSelector } from 'react-redux';

export const ContactsPage = () => {
  const showModal = useSelector(state => state.contacts.showModal);

  return (
    <div>
      <ContactsForm />
      <ContactsList />
      <ContactsFilter />
      {showModal && <ContactEditModal />}
    </div>
  );
};
