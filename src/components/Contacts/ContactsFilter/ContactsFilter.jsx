import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/contacts-slices';
import {
  FilterStyled,
  Label,
  Input,
  FilterButton,
  IconButton,
} from './ContactsFilter.styled';
export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(updateFilter(e.currentTarget.value));
    };

  return (
    <FilterStyled>
      <Label>
        Find your contact
        <Input
          type="search"
          name="filter"
          onChange={handleChange}
          autoComplete="off"
        />
      </Label>
      {/* <FilterButton type="submit">
        Find
        <IconButton />
      </FilterButton> */}
    </FilterStyled>
  );
};
