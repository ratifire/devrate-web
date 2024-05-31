import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    telegram: '',
    linkedIn: '',
    gitHub: '',
    behance: '',
    mail: '',
    phone: '',
  },
  reducers: {},
});
