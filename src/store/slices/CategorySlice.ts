// src/redux/categorySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  selectedCategories: string[];
}

const initialState: CategoryState = {
  selectedCategories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      const index = state.selectedCategories.indexOf(category);
      if (index > -1) {
        // Remove the category if it's already selected
        state.selectedCategories.splice(index, 1);
      } else {
        // Add the category if it's not selected
        state.selectedCategories.push(category);
      }
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.selectedCategories = action.payload;
    },
  },
});

export const { toggleCategory, setCategories } = categorySlice.actions;
export default categorySlice.reducer;
