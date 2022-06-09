import * as React from 'react';
import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { progressRequest } from '../../features/prices/pricesSlice';
import ChangePrice from '../changePrice/ChangePrice';
import Loader from '../loader/Loader';
import Popup from '../popup/Popup';
import PricesList from '../priceList/PriceList';
import './app.scss';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(progressRequest());
    navigate('/services');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { loading, error } = useAppSelector((state) => state.pricesSliceReducer);

  const loader = loading ? <Loader /> : null;
  const popup = error ? <Popup text={error} /> : null;

  return (
    <>
      {loader}
      {popup}
      <Routes>
        <Route path="/services" element={<PricesList />} />
        <Route path="/services/:id" element={<ChangePrice />} />
      </Routes>
    </>
  );
}
