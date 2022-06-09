import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  progressRequestDet,
  searchSuccessDet,
} from '../../features/detailsePrice/detailsePriceSlice';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Button from '../button/Button';
import Loader from '../loader/Loader';
import Popup from '../popup/Popup';

import './changePrice.scss';

export default function ChangePrice(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(progressRequestDet(params.id));
  }, [dispatch, params.id]);

  // eslint-disable-next-line max-len
  const { detailsPrice, loading, error } = useAppSelector((state) => (state.detailsPriceSliceReducer));

  let name = '';
  let price: number | null = null;
  let content = '';

  if (detailsPrice !== null) {
    name = detailsPrice.name;
    price = detailsPrice.price;
    content = detailsPrice.content;
  }

  const hendelClickCancel = (): void => {
    navigate('/services');
    dispatch(searchSuccessDet({ detailsPrice: {} }));
  };

  const loader = loading ? <Loader /> : null;
  const popup = error !== '' ? <Popup text={error} /> : null;

  return (
    <>
      {loader}
      {popup}
      <div className="ChangePrice__wrapper">
        <label htmlFor="name">
          Название
          <input
            type="text"
            id="name"
            value={name}
            readOnly
          />
        </label>
        <label htmlFor="cost">
          Стоимость
          <input
            type="text"
            id="cost"
            value={price}
            readOnly
          />
        </label>
        <label htmlFor="description">
          Описание
          <input
            type="text"
            id="description"
            value={content}
            readOnly
          />
        </label>
        <footer className="ChangePrice__futer">
          <Button
            className="cancel"
            nameButon="Отмена"
            typeButton="button"
            action={hendelClickCancel}
          />
        </footer>
      </div>
    </>
  );
}
