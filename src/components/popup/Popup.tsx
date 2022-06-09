import * as React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../button/Button';
import { useAppDispatch } from '../../hooks';
import {
  progressRequestDet,
} from '../../features/detailsePrice/detailsePriceSlice';

import { progressRequest } from '../../features/prices/pricesSlice';
import './popup.scss';

export default function Popup({ text }: { text: string }): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const repeatedRequest = (): void => {
    if (params.id) {
      dispatch(progressRequestDet(params.id));
      return;
    }
    dispatch(progressRequest());
  };
  return (
    <div className="Popup__wrapper">
      <p className="Popup__main">
        {text}
      </p>
      <Button
        className="blackButton"
        action={repeatedRequest}
        nameButon="Повторить запрос"
        typeButton="button"
      />
    </div>
  );
}
