import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentData: {},
  currentContractUpdate: null,
  answers: [],
  currentPageQuestions: [],
  staticContent: {},
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCurrentData: (state, action) => {
      state.currentData = action.payload;
    },
    delCurrentData: (state) => {
      state.currentData = {};
      state.answers = [];
    },
    setAnswers: (state, action) => {
      state.answers = action.payload;
    },
    setStaticContent: (state, action) => {
      state.staticContent = action.payload;
    },
    setCurrentPageQuestions: (state, action) => {
      state.currentPageQuestions = action.payload;
    },
    setCurrentContractUpdate: (state, action) => {
      state.currentContractUpdate = action.payload;
    },
  },
});

export const selectCurrentData = (state) => state.data.currentData;
export const selectCurrentContractUpdate = (state) => state.data.currentContractUpdate;
export const selectAnswers = (state) => state.data.answers;
export const selectStaticContent = (state) => state.data.staticContent;
export const selectCurrentPageQuestions = (state) => state.data.currentPageQuestions;
export const {
  setCurrentData,
  delCurrentData,
  setAnswers,
  setStaticContent,
  setCurrentPageQuestions,
  setCurrentContractUpdate,
} = dataSlice.actions;
export default dataSlice.reducer;
