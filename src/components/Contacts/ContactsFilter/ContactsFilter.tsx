import { useDispatch } from 'react-redux';
// @ts-expect-error TS(2307): Cannot find module 'redux/contacts/contacts-slices... Remove this comment to see the full error message
import { updateFilter } from 'redux/contacts/contacts-slices';
import {
  FilterStyled,
  Label,
  Input,
  // @ts-expect-error TS(2305): Module '"./ContactsFilter.styled"' has no exported... Remove this comment to see the full error message
  FilterButton,
  // @ts-expect-error TS(2305): Module '"./ContactsFilter.styled"' has no exported... Remove this comment to see the full error message
  IconButton,
} from './ContactsFilter.styled';
export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
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
