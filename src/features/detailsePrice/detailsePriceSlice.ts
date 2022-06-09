import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Price = {
  id: number,
  name: string,
  price: number,
  content: string,
};

type DetailsPrice = {
  detailsPrice: Price,
  loading: Boolean,
  error: string,
};

const initialPrice = {
  id: null,
  name: '',
  price: null,
  content: '',
};

const initialState = {
  detailsPrice: initialPrice,
  loading: false,
  error: '',
};

export const detailsPriceSlice = createSlice({
  name: 'detailsPrice',
  initialState,
  reducers: {
    progressRequestDet: (state) => ({
      ...state, loading: true, error: '',
    }),

    searchFailureDet: (state, action: PayloadAction<{ message: string }>) => {
      const { message } = action.payload;
      return { ...state, loading: false, error: message };
    },

    searchSuccessDet: (state, action: PayloadAction<DetailsPrice>) => {
      const { detailsPrice } = action.payload;
      return {
        ...state, detailsPrice, loading: false, error: '',
      };
    },
  },
});

export const {
  progressRequestDet, searchFailureDet, searchSuccessDet,
} = detailsPriceSlice.actions;

export default detailsPriceSlice.reducer;
