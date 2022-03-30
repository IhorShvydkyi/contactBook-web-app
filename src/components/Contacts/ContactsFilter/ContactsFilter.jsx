import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/contacts-slices';
import { Label, Input } from '../../Forms/Forms.styled';
export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <>
      <Label>
        Find your contact
        <Input
          type="search"
          name="filter"
          onChange={handleChange}
          autoComplete="off"
        />
      </Label>
      <button type="submit">Find</button>
    </>
  );
};
