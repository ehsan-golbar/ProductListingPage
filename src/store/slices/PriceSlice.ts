// src/redux/categorySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceState {
  minPriceRange: number;
  maxPriceRange: number;
}

const initialState: PriceState = {
  minPriceRange: 0,
  maxPriceRange: 1000,
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setMinPriceRange: (state, action: PayloadAction<number>) => {
      state.minPriceRange = action.payload;
    },
    setMaxPriceRange: (state, action: PayloadAction<number>) => {
      state.maxPriceRange = action.payload;
    },
  },
});

export const { setMaxPriceRange, setMinPriceRange } = priceSlice.actions;
export default priceSlice.reducer;
