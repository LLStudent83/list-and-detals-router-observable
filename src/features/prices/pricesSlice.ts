import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Price = {
  id: number,
  name: string,
  price: number,
  content: string,
};

type InitialState = {
  prices: Price[],
  loading: boolean,
  error: null | string,
};

const initialState: InitialState = {
  prices: [],
  loading: false,
  error: null,
};

export const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    progressRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    searchFailure: (state, action: PayloadAction<{ message: string }>) => {
      const { message } = action.payload;
      state.error = message;
      state.loading = false;
    },

    searchSuccess: (state, action:PayloadAction<InitialState>) => {
      const { prices } = action.payload;
      state.prices = prices;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  progressRequest, searchFailure, searchSuccess,
} = pricesSlice.actions;

export default pricesSlice.reducer;
