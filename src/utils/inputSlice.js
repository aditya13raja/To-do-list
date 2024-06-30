import { createSlice } from '@reduxjs/toolkit';

// Slice to store changes in input 
const inputSlice = createSlice({
  name: 'input',
  initialState: {
    value: '',
  },
  reducers: {
    updateInput: (state, action) => {
      state.value = action.payload;
    },
  }
});

export const { updateInput } = inputSlice.actions;
export default inputSlice.reducer;
