import * as React from 'react';
import { useAppSelector } from '../../hooks';
import PriseItem from '../priceItem/PriceItem';
import './priceList.scss';

export default function PriceList(): JSX.Element {
  const prices = useAppSelector((store) => store.pricesSliceReducer.prices);

  return (
    <ul className="PriceList__list">

      {prices?.map((prise) => (
        <PriseItem
          key={prise?.id}
          id={prise!.id}
          name={prise!.name}
          cost={prise!.price}
        />
      ))}
    </ul>
  );
}
