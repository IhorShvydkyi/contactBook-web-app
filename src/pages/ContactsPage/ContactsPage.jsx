import { ContactsFilter } from 'components/Contacts/ContactsFilter/ContactsFilter';
import { ContactsForm } from 'components/Contacts/ContactsForm/ContatcsForm';
import { ContactsList } from 'components/Contacts/ContactsList/ContactsList';

export const ContactsPage = () => {
  return (
    <div>
      <ContactsForm />
      <ContactsList />
      <ContactsFilter />
    </div>
  );
};
