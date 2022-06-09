import * as React from 'react';
import { Link } from 'react-router-dom';

import './priceItem.scss';

export default function PriseItem({ name, cost, id }:
{ name: string, cost: number, id: number }): JSX.Element {
  // const navigate = useNavigate();

  return (
    <li className="PriseItem__item">
      <Link to={`/services/${id}`}>
        <span className="PriseItem__text">
          {`${name} ${cost}`}
        </span>
      </Link>
    </li>
  );
}
