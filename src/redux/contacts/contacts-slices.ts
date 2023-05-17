import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
  showModal: false,
  editContact: {},
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
    openModal: (state, action) => {
      state.showModal = true;
      state.editContact = state.items.filter(
        // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
        contact => contact.id === action.payload,
      );
    },
    closeModal: (state, _) => {
      state.showModal = false;
    },
  },
  extraReducers: {
    // @ts-expect-error TS(2464): A computed property name must be of type 'string',... Remove this comment to see the full error message
    [contactsOperations.fetchContacts.fulfilled](state: any, action: any) {
      state.items = action.payload;
    },
    // @ts-expect-error TS(2464): A computed property name must be of type 'string',... Remove this comment to see the full error message
    [contactsOperations.addContact.fulfilled](state: any, action: any) {
      state.items.push(action.payload);
    },
    // @ts-expect-error TS(2464): A computed property name must be of type 'string',... Remove this comment to see the full error message
    [contactsOperations.deleteContact.fulfilled](state: any, action: any) {
      state.items = state.items.filter(
        (contact: any) => contact.id !== action.payload,
      );
    },
    // @ts-expect-error TS(2464): A computed property name must be of type 'string',... Remove this comment to see the full error message
    [contactsOperations.updateContact.fulfilled](state: any, action: any) {
      state.items = state.items.map((item: any) => item.id === action.payload.id ? action.payload : item,
      );
    },
  },
});

export const { updateFilter, openModal, closeModal } = contactsSlice.actions;

export default contactsSlice.reducer;
