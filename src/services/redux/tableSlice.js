import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 1,
  iteration: 1,
};

export const tableNumber = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setNumber: (state, action) => {
      state.number = action.payload;
    },
    setIteration: (state, action) => {
      state.iteration = action.payload;
    },
  },
});

// export const selectLanguage = (state) => {
//   console.log(state);
//   return state.tool.language;
// };
export const selectNumber = (state) => state.table.number;
export const selectIteration = (state) => state.table.iteration;
export const { setNumber, setIteration } = tableNumber.actions;
export default tableNumber.reducer;
