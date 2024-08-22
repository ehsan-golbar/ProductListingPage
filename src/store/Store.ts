// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice'; // Example slice
import categoryReducer from './slices/CategorySlice'; // New category slice

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
