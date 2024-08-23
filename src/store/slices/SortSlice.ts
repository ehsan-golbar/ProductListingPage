// src/redux/slices/sortPanelSlice.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  ascPrice: boolean;
  bestRate: boolean;
}

const initialState: SortState = {
  ascPrice: true,
  bestRate: false,
};

const sortPanelSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    toggleAscPrice: (state) => {
      state.ascPrice = !state.ascPrice;
    },
    toggleBestRate: (state) => {
      state.bestRate = !state.bestRate;
    },
    setBestRate: (state, action: PayloadAction<boolean>) => {
      state.bestRate = action.payload;
    },
  },
});

export const { setBestRate, toggleAscPrice, toggleBestRate } =
  sortPanelSlice.actions;
export default sortPanelSlice.reducer;
