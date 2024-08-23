// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice'; // Example slice
import categoryReducer from './slices/CategorySlice'; // New category slice
import priceReducer from './slices/PriceSlice'
import sortReducer from './slices/SortSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    price : priceReducer,
    sort: sortReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
