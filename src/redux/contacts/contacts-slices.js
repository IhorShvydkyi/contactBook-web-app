import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';

const initialState = { items: [], filter: '', isLoading: false, error: null };
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // updateFilter: (state, action) => {
    //   state.filter = action.payload;
    // },
  },
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items.push(action.payload);
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

export default contactsSlice.reducer;
