import { useSelector } from 'react-redux';
import { getFilter } from '../../../redux/contacts/conatcts-selector';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../../redux/contacts/contacts-slice';
// import Spinner from '../Spinner/Spinner';
import { ContactListStyled, ContactItem, Number } from './ContactsList.styled';

export const ContactsList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const getFilteredContacts = contacts =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

  const contactFilterList = contacts ? getFilteredContacts(contacts) : null;
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      {/* {isFetching && <Spinner />} */}
      {contacts && (
        <ContactListStyled>
          {contactFilterList.map(item => (
            <ContactItem key={item.id}>
              <Number>
                {item.name}: {item.phone}
              </Number>
              <button type="button" onClick={() => deleteContact(item.id)}>
                Delete
              </button>
            </ContactItem>
          ))}
        </ContactListStyled>
      )}
    </>
  );
};

export default ContactsList;
