// src/redux/slices/sortPanelSlice.js
import { createSlice } from '@reduxjs/toolkit';


interface SortState {
    ascPrice: boolean;
    ascRate: boolean;
  }
  

const initialState : SortState = {

  ascPrice: true,
  ascRate: false
};

const sortPanelSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {

    toggleAscPrice: (state) => {
      state.ascPrice = !state.ascPrice;
    },
    toggleAscRate: (state) => {
      state.ascRate = !state.ascRate;
    }
  }
});

export const {  toggleAscPrice, toggleAscRate } = sortPanelSlice.actions;
export default sortPanelSlice.reducer;
