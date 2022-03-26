import ContactsList from 'components/Contacts/ContactsList/ContactsList';
import { ContactsForm } from '../../components/Contacts/ContactsForm/ContatcsForm';

export const ContactsPage = () => {
  return (
    <>
      <ContactsForm />
      <ContactsList />
    </>
  );
};
