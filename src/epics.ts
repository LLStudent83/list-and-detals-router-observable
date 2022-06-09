import { ofType, ActionsObservable } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  map, of, switchMap, catchError,
} from 'rxjs';
import { searchSuccess, searchFailure } from './features/prices/pricesSlice';
import {
  searchSuccessDet,
  searchFailureDet,
} from './features/detailsePrice/detailsePriceSlice';

type Price = {
  id: number,
  name: string,
  price: number,
  content?: string,
};

export const fetchDetailsPriceApic = (action$: ActionsObservable<any>): void => action$.pipe(

  ofType('detailsPrice/progressRequestDet'),

  map((o) => o.payload),

  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_BASE_URL}/api/services/${o}`).pipe(
    map((o) => searchSuccessDet({ detailsPrice: o })),

    catchError((e) => of(searchFailureDet(e))),
  )),
);

export const fetchPricesApic = (action$: ActionsObservable<any>):void => action$.pipe(
  ofType('prices/progressRequest'),
  switchMap(() => ajax.getJSON(`${process.env.REACT_APP_BASE_URL}/api/services`).pipe(
    map((o) => searchSuccess({ prices: o })),
    catchError((e) => of(searchFailure(e))),
  )),
);
