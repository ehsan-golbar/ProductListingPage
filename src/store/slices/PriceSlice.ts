// src/redux/categorySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PriceState {
  minPriceRange: number;
  maxPriceRange: number;
}

const initialState: PriceState = {
  minPriceRange: 0,
  maxPriceRange: 100,
};

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setMinPriceRange: (state, action: PayloadAction<number>) => {
      state.minPriceRange = action.payload;
      //   const category = action.payload;
      //   const index = state.selectedCategories.indexOf(category);
      //   if (index > -1) {
      //     // Remove the category if it's already selected
      //     state.selectedCategories.splice(index, 1);
      //   } else {
      //     // Add the category if it's not selected
      //     state.selectedCategories.push(category);
      //   }
    },
    setMaxPriceRange: (state, action: PayloadAction<number>) => {
      state.maxPriceRange = action.payload;
    },
  },
});

export const { setMaxPriceRange, setMinPriceRange } = priceSlice.actions;
export default priceSlice.reducer;
