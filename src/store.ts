import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import pricesSliceReducer from './features/prices/pricesSlice';
import detailsPriceSliceReducer from './features/detailsePrice/detailsePriceSlice';
import { fetchPricesApic, fetchDetailsPriceApic } from './epics';

const epicMiddleware = createEpicMiddleware();
const rootEpic = combineEpics(fetchPricesApic, fetchDetailsPriceApic);

export const store = configureStore({
  reducer: {
    pricesSliceReducer,
    detailsPriceSliceReducer,
  },
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
