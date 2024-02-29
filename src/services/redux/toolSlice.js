import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'EN',
  isLogged: false,
  showPopup: false,
  lockedQuestions: false,
  pickedAnnexException: false,
};

export const toolSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setShowPopup: (state, action) => {
      state.showPopup = action.payload;
    },
    setIsLockedQuestions: (state, action) => {
      state.lockedQuestions = action.payload;
    },
    setPickedAnnexException: (state, action) => {
      state.pickedAnnexException = action.payload;
    },
  },
});

// export const selectLanguage = (state) => {
//   console.log(state);
//   return state.tool.language;
// };
export const selectLanguage = (state) => state.tool.language;
export const selectIsLogged = (state) => state.tool.isLogged;
export const selectShowPopup = (state) => state.tool.showPopup;
export const selectLockedQuestions = (state) => state.tool.lockedQuestions;
export const selectPickedAnnexException = (state) => state.tool.pickedAnnexException;
export const {
  setLanguage,
  setIsLogged,
  setShowPopup,
  setIsLockedQuestions,
  setPickedAnnexException,
} = toolSlice.actions;
export default toolSlice.reducer;
