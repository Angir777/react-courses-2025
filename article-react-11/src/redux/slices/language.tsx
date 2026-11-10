import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageSliceState {
  currentLanguage: string;
}

const initialState: LanguageSliceState = {
  currentLanguage: 'pl',
};

const languageSlice = createSlice({
  name: 'language',
  initialState: initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<string>) {
      localStorage.setItem('app-currentLanguage', action.payload);
      state.currentLanguage = action.payload;
    },
    loadCurrentLanguageFromLocalStore(state) {
      const currentLang = localStorage.getItem('app-currentLanguage');
      if (currentLang !== null) {
        state.currentLanguage = currentLang;
      } else {
        state.currentLanguage = 'pl';
      }
    },
  },
});

export const languageActions = languageSlice.actions;
export default languageSlice.reducer;
